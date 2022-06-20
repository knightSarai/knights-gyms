from django.http import JsonResponse
from rest_framework import generics, status

from .models import Equipment, EquipmentCount
from .schemas import EquipmentCountSchema
from .serializers import EquipmentSerializer, EquipmentCountSerializer


class EquipmentListView(generics.ListCreateAPIView):
    queryset = Equipment.objects.filter(active=True)
    serializer_class = EquipmentSerializer


class EquipmentCountListView(generics.ListCreateAPIView):
    queryset = EquipmentCount.objects.filter(active=True, amount__gt=0)
    serializer_class = EquipmentCountSerializer

    def post(self, request, *args, **kwargs):
        post_data = request.data
        equipment_count_schema = EquipmentCountSchema(**post_data).dict()

        equipment_name = equipment_count_schema.get('my_equipment')
        amount = post_data.get('amount')
        equipment = Equipment.objects.get_or_create(name=equipment_name)[0]

        equipment_count = EquipmentCount.objects.filter(my_equipment=equipment)
        if equipment_count.exists():
            equipment_count.update(amount=amount)
        else:
            EquipmentCount.objects.create(my_equipment=equipment, amount=amount)
        return self.get(request, *args, **kwargs)


class EquipmentCountDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EquipmentCount.objects.filter(active=True)
    serializer_class = EquipmentCountSerializer
