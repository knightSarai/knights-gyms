from django.db import models
from base.models import BaseModel, MasterModel


class Workout(MasterModel):
    details = models.TextField('Details')
    equipments = models.ManyToManyField('equipments.Equipment', through='WorkoutEquipment', related_name='all_equipments')


class WorkoutEquipment(BaseModel):
    workout = models.ForeignKey('workouts.Workout', related_name="workout_equipments", on_delete=models.CASCADE, null=True)
    equipment = models.ForeignKey('equipments.Equipment', related_name="workout_equipments", on_delete=models.CASCADE, null=True)
    amount = models.IntegerField('Amount', default=1, null=False)

    class Meta:
        unique_together = ('equipment', 'workout',)
