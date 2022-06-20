from django.db import transaction
from django.http import JsonResponse
from rest_framework import generics, status
from rest_framework.response import Response

from equipments.models import Equipment
from equipments.schemas import WorkoutEquipmentSchema
from .models import Workout, WorkoutEquipment
from .schemas import WorkoutSchema
from .serializers import WorkoutSerializer


class WorkoutListView(generics.ListCreateAPIView):
    queryset = Workout.objects.filter(active=True)
    serializer_class = WorkoutSerializer

    def post(self, request, *args, **kwargs):
        post_data = request.data
        equipments_json = post_data.get('equipments') or []

        equipment_schemas = [WorkoutEquipmentSchema(**equipment) for equipment in equipments_json]

        with transaction.atomic():
            equipments = [
                {
                    "object": Equipment.objects.get_or_create(
                        **equipment_schema.dict(exclude_unset=True, exclude={'amount'})
                    )[0],
                    "amount": equipment_schema.amount
                }
                for equipment_schema in equipment_schemas
            ]

            response = super().post(request, *args, **kwargs)

            workout_id = response.data['id']
            workout = Workout.objects.get(id=workout_id)

            for equipment in equipments:
                WorkoutEquipment.objects.create(
                    workout=workout,
                    equipment=equipment['object'],
                    amount=equipment['amount']
                )

        serializer = WorkoutSerializer(workout)
        headers = self.get_success_headers(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class WorkoutDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Workout.objects.filter(active=True)
    serializer_class = WorkoutSerializer

    def put(self, request, *args, **kwargs):
        workout_id = kwargs.get('pk')
        put_data = request.data
        workout_schema = WorkoutSchema(**put_data)
        equipments_json = put_data.get('equipments') or []

        equipment_schemas = [WorkoutEquipmentSchema(**equipment) for equipment in equipments_json]

        equipments = [
            {
                "object": Equipment.objects.get_or_create(
                    **equipment_schema.dict(exclude_unset=True, exclude={'amount'})
                )[0],
                "amount": equipment_schema.amount
            }
            for equipment_schema in equipment_schemas
        ]

        workout = Workout.objects.get(id=workout_id)
        with transaction.atomic():
            workout.update(workout_schema.dict())
            WorkoutEquipment.objects.filter(workout=workout).delete()

            for equipment in equipments:
                WorkoutEquipment.objects.create(
                    workout=workout,
                    equipment=equipment['object'],
                    amount=equipment['amount']
                )

        return JsonResponse({'message': 'Workout updated'}, status=status.HTTP_200_OK)


