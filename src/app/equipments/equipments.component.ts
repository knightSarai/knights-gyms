import {Component, OnInit} from '@angular/core';
import {Equipment} from "../models/equipment.model";

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
  equipments: Equipment[] = [
    new Equipment('pull up bar', 1),
    new Equipment('dumbbell', 2),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
