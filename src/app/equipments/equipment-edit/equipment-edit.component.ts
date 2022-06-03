import {Component, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Equipment} from "@models/equipment.model";
import { Subscription } from 'rxjs';
import {EquipmentsService} from "../equipments.service";

export interface EditFormValue {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: false}) form: NgForm;
  editMode = false;
  editEquipment: Equipment;
  editSubscription: Subscription;
  constructor(private equipmentService: EquipmentsService) {
  }

  ngOnInit(): void {
    this.editSubscription = this.equipmentService.editingStarted
      .subscribe((id: number) => {
        this.editMode = true;
        this.editEquipment = this.equipmentService.getEquipment(id);
        this.form.setValue({
          name: this.editEquipment.name,
          amount: this.editEquipment.amount
        })
      })
  }

  addEquipment(value: EditFormValue): void {
    const equipment = new Equipment(null, value.name, value.amount)
    this.equipmentService.addEquipment(equipment);
  }

  updateEquipment(value: EditFormValue): void {
    const editEquipment = new Equipment(this.editEquipment.id, value.name, value.amount);
    this.equipmentService.updateEquipment(editEquipment)
  }

  deleteEquipment(id: number) {
    this.equipmentService.deleteEquipment(id);
    this.clear()
  }

  onSubmit():void {
    const { value } = this.form;
    if (this.editMode) {
      this.updateEquipment(value);
    } else {
      this.addEquipment(value);
    }
    this.clear();
  }

  clear() {
    this.editEquipment = null;
    this.editMode = false;
    this.form.reset()
  }

  ngOnDestroy(): void {
      this.editSubscription.unsubscribe();
  }
}
