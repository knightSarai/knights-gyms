from rest_framework import serializers

from .models import Equipment, EquipmentCount


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = ["id", "name"]


class EquipmentCountSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentCount
        fields = ["id", "my_equipment", "amount"]
