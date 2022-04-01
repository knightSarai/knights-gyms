import {EventEmitter, Injectable} from '@angular/core';
import {Equipment} from "@models/equipment.model";

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  equipmentChanged = new EventEmitter<Equipment[]>();
  private equipments: Equipment[] = [
    new Equipment('pull up bar', 1),
    new Equipment('dumbbell', 2),
  ];

  constructor() { }

  getEquipments(): Equipment[] {
    return [...this.equipments];
  }

  addEquipment(equipment: Equipment) {
    this.equipments.push(equipment);
    this.equipmentChanged.emit([...this.equipments])
  }
}
