from rest_framework import generics 
# from rest_framework.response import Response

from .models import Equipment
from .serializers import EquipmentSerializer


class EquipmentListView(generics.ListCreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

