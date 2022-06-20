from typing import Optional
from pydantic import BaseModel, conint


class WorkoutEquipmentSchema(BaseModel):
    id: Optional[int]
    name: str
    active: Optional[bool]
    amount: conint(gt=0)


class EquipmentCountSchema(BaseModel):
    my_equipment: str
    amount: conint(gt=0)
