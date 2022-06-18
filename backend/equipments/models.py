from django.db import models
from base.models import MasterModel


class Equipment(MasterModel):
    pass


class EquipmentCount(MasterModel):
    my_equipment = models.OneToOneField(Equipment, on_delete=models.CASCADE, related_name="equipment_counts")
    amount = models.IntegerField('Amount', default=0, null=False)
