from django.db import models
from base.models import MasterModel


class Equipment(MasterModel):
    pass


class EquipmentCount(MasterModel):
    my_equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE, related_name="equipment_counts")
    amount = models.IntegerField('Amount', default=1, null=False)


