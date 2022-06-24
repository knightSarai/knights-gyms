import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Equipment} from "@models/equipment.model";
import {map, Subject} from "rxjs";


export type EquipmentResponse = {id: number, name: string}
export type WorkoutEquipmentResponse = {equipment:EquipmentResponse , amount: number}[]
export type EquipmentInventory = {my_equipment: EquipmentResponse, amount: number}


@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  private equipments: Equipment[] = [];
  equipmentChanged = new Subject<Equipment[]>();
  editingStarted = new Subject<number>();

  constructor(private http: HttpClient) { }

  private onEquipmentsChanged() {
    this.equipmentChanged.next([...this.equipments])
  }

  _createNewEquipmentsList(newEquipment: Equipment[]){
    this.equipments= [...this.equipments, ...newEquipment];
  }

  _addToList(equipments: Equipment[]) {
    this._createNewEquipmentsList(equipments);
    this.onEquipmentsChanged();
  }

  private setEquipment(equipment){
    this.equipments = equipment
    this.onEquipmentsChanged()
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
    this.onEquipmentsChanged()
  }

  deleteEquipment(id: number) {
    this.equipments = this.equipments.filter(equipment => equipment.id !== id);
    this.onEquipmentsChanged()
  }

  fetchEquipments() {
    this.http
      .get<EquipmentInventory[]>('http://localhost:8000/api/equipments/inventory/')
      .pipe(map(equipment => {
        return equipment.map(({my_equipment, amount}) => {
          return new Equipment(
            my_equipment.id,
            my_equipment.name,
            amount
          )
        })
      }))
      .subscribe(equipment => this.setEquipment(equipment));
  }


}
