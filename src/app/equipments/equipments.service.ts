import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Equipment} from "@models/equipment.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  private equipments: Equipment[] = [];
  equipmentChanged = new Subject<Equipment[]>();
  editingStarted = new Subject<number>();

  constructor(private http: HttpClient) { }

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

  getEquipment(id: number) {
    return this.equipments.find(equipment => equipment.id === id)
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

  updateEquipment(newEquipment: Equipment) {
    const equipments = [...this.equipments]
    const idx = equipments.findIndex(equipment => equipment.id === newEquipment.id)
    equipments[idx] = newEquipment;
    this.equipments = equipments;
    this._onEquipmentsChanged()
  }

  deleteEquipment(id: number) {
    this.equipments = this.equipments.filter(equipment => equipment.id !== id);
    this._onEquipmentsChanged()
  }

  fetchEquipments() {
    this.http
      .get<Equipment[]>('http://localhost:8000/api/equipments/inventory/')
      .subscribe(equipments => {
        console.log(equipments)
      })
  }


}
