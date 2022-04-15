import {Injectable} from '@angular/core';
import {Equipment} from "@models/equipment.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  equipmentChanged = new Subject<Equipment[]>();
  private equipments: Equipment[] = [];

  constructor() { }

  getEquipments(): Equipment[] {
    return [...this.equipments];
  }

  addEquipments(equipments: Equipment[]) {
    this.equipments= [...this.equipments, ...equipments];
    this.equipmentChanged.next([...this.equipments])
  }
}
