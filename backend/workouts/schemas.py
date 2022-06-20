from typing import Optional, List, Dict

from pydantic import BaseModel


class WorkoutSchema(BaseModel):
    name: str
    details: str
    equipments: Optional[List[dict]]
