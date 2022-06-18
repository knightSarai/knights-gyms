from typing import Optional
from pydantic import BaseModel, conint


class WorkoutEquipmentSchema(BaseModel):
    id: Optional[int]
    name: str
    active: Optional[bool]
    amount: conint(gt=1)
