import {Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Equipment} from "@models/equipment.model";
import {EquipmentsService} from "../equipments.service";

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {

  constructor(private equipmentService: EquipmentsService) {
  }

  ngOnInit(): void {
  }

  addEquipment(form: NgForm) {
    const {value} = form;
    const equipment = new Equipment(null, value.name, value.amount) 
    this.equipmentService.addEquipment(equipment);
  }

}
