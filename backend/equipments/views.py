from rest_framework import generics

from .models import Equipment
from .serializers import EquipmentSerializer


class EquipmentListView(generics.ListCreateAPIView):
    queryset = Equipment.objects.filter(active=True)
    serializer_class = EquipmentSerializer

