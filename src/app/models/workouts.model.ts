import {Equipment} from "@models/equipment.model";

export class Workout {
  constructor(
    public id: number,
    public name: string,
    public date: Date,
    public details: string,
    public equipments: Equipment[]
  ) {}
}
