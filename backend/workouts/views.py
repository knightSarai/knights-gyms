from django.db import transaction
from rest_framework import generics, status
from rest_framework.response import Response

from equipments.models import Equipment
from equipments.schemas import WorkoutEquipmentSchema
from .models import Workout, WorkoutEquipment
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
                    "object": Equipment.objects.get_or_create(**equipment_schema.dict(exclude_unset=True, exclude={'amount'}))[0],
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

    # create workout and update the WorkoutEquipment table with the new workout id and equipment id and the amount
    # def create(self, validated_data):
    #   workout = Workout.objects.create(name=validated_data["name"], details=validated_data["details"])
    #   for equipment in validated_data["equipments"]:
    #     WorkoutEquipment.objects.create(workout=workout, **equipment)
    #   return workout
