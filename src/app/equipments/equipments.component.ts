import {Component, OnInit} from '@angular/core';
import {Equipment} from "../models/equipment.model";
import {EquipmentsService} from "./equipments.service";

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
  equipments: Equipment[];

  constructor(private equipmentService: EquipmentsService) {
  }

  ngOnInit(): void {
    this.equipments = this.equipmentService.getEquipments()
    this.equipmentService.equipmentChanged
      .subscribe((equipments: Equipment[]) => this.equipments = equipments)
  }
}
