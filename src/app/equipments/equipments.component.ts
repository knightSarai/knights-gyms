import {Component, OnDestroy, OnInit} from '@angular/core';
import {Equipment} from "@models/equipment.model";
import {EquipmentsService} from "./equipments.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit, OnDestroy {
  equipments: Equipment[];
  private equipmentChangedSub: Subscription;

  constructor(private equipmentService: EquipmentsService) {
  }

  ngOnInit(): void {
    this.equipments = this.equipmentService.getEquipments()
    this.equipmentChangedSub = this.equipmentService.equipmentChanged
      .subscribe((equipments: Equipment[]) => this.equipments = equipments)
  }

  ngOnDestroy(): void {
    this.equipmentChangedSub.unsubscribe()
  }
}
