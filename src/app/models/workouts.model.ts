import {Equipment} from "@models/equipment.model";

export class Workout {
  constructor(
    public id: number = null,
    public name: string = '',
    public date: Date = new Date(),
    public details: string = '',
    public equipments: Equipment[] = [],
  ) {}
}
