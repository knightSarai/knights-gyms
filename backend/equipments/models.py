from django.db import models
from workouts.models import Workout


class Equipment(models.Model):
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE, null=True)
    name = models.CharField('Name', max_length=255, null=False) 
    amount = models.CharField('Amount', max_length=255, null=False) 

    def __str__(self):
        return self.name
    

