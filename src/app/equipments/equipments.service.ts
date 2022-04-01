import {EventEmitter, Injectable} from '@angular/core';
import {Equipment} from "@models/equipment.model";

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  equipmentChanged = new EventEmitter<Equipment[]>();
  private equipments: Equipment[] = [];

  constructor() { }

  getEquipments(): Equipment[] {
    return [...this.equipments];
  }

  addEquipments(equipments: Equipment[]) {
    this.equipments= [...this.equipments, ...equipments];
    this.equipmentChanged.emit([...this.equipments])
  }
}
