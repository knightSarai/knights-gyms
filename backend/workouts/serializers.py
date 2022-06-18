from rest_framework import serializers

from equipments.serializers import EquipmentSerializer
from .models import Workout, WorkoutEquipment


class WorkoutEquipmentSerializer(serializers.ModelSerializer):
    equipment = EquipmentSerializer()

    class Meta:
        model = WorkoutEquipment
        fields = ["equipment", "amount"]


class WorkoutSerializer(serializers.ModelSerializer):
    workout_equipments = WorkoutEquipmentSerializer(many=True, read_only=True)

    class Meta:
        model = Workout
        fields = ["id", "name", "details", "created", "workout_equipments"]




