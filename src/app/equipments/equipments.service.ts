import {Injectable} from '@angular/core';
import {Equipment} from "@models/equipment.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  private equipments: Equipment[] = [];
  equipmentChanged = new Subject<Equipment[]>();

  constructor() { }

  _onEquipmentsChanged() {
    this.equipmentChanged.next([...this.equipments])
  }

  _createNewEquipmentsList(newEquipment: Equipment[]){
    this.equipments= [...this.equipments, ...newEquipment];
  }

  _addToList(equipments: Equipment[]) {
    this._createNewEquipmentsList(equipments);
    this._onEquipmentsChanged();
  }

  getEquipments(): Equipment[] {
    return [...this.equipments];
  }

  getNewId(){
    return this.equipments.length + 1;
  }

  creatNewEquipment(equipment: Equipment, id: number = null){
    const newId = id ?? this.getNewId();
    return new Equipment(newId, equipment.name, equipment.amount);
  }

  addEquipment(equipment: Equipment) {
    const newEquipment = this.creatNewEquipment(equipment)
    this._addToList([newEquipment])
  }

  addEquipments(equipments: Equipment[]) {
    const newEquipments = equipments.map((equipment, idx) => {
      const newId = idx + this.getNewId()
      return this.creatNewEquipment(equipment, newId)
    })
    this._addToList(newEquipments)
  }
}
