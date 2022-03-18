import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Equipment} from "@models/equipment.model";

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {
  @ViewChild('equipmentName') equipmentNameRef: ElementRef;
  @ViewChild('equipmentAmount') equipmentAmountRef: ElementRef;
  @Output() equipmentAdded = new EventEmitter<Equipment>();

  constructor() { }

  ngOnInit(): void {
  }

  addEquipment() {
    const equipmentName = this.equipmentNameRef.nativeElement.value;
    const equipmentAmount = this.equipmentAmountRef.nativeElement.value;
    const equipment = new Equipment(equipmentName, equipmentAmount);
    this.equipmentAdded.emit(equipment);
    this.equipmentNameRef.nativeElement.value = '';
    this.equipmentAmountRef.nativeElement.value = '';
  }

}
