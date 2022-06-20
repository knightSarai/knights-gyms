from django.db import models
from base.models import BaseModel, MasterModel


class Workout(MasterModel):
    details = models.TextField('Details')
    equipments = models.ManyToManyField('equipments.Equipment', through='WorkoutEquipment', related_name='all_equipments')

    def update(self, workout_schema):
        self.name = workout_schema.get('name') or self.name
        self.details = workout_schema.get('details') or self.details
        self.save()


class WorkoutEquipment(BaseModel):
    workout = models.ForeignKey('workouts.Workout', related_name="workout_equipments", on_delete=models.CASCADE, null=True)
    equipment = models.ForeignKey('equipments.Equipment', related_name="workout_equipments", on_delete=models.CASCADE, null=True)
    amount = models.IntegerField('Amount', default=0, null=False)

    class Meta:
        unique_together = ('equipment', 'workout',)

    def delete(self, *args, **kwargs):
        super(models.Model, self).delete(*args, **kwargs)
