from rest_framework import generics

from .models import Equipment, EquipmentCount
from .serializers import EquipmentSerializer, EquipmentCountSerializer


class EquipmentListView(generics.ListCreateAPIView):
    queryset = Equipment.objects.filter(active=True)
    serializer_class = EquipmentSerializer


class EquipmentCountListView(generics.ListCreateAPIView):
    queryset = EquipmentCount.objects.filter(active=True)
    serializer_class = EquipmentCountSerializer

