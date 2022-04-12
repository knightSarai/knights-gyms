import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {WorkoutsComponent} from "../workouts/workouts.component";
import {EquipmentsComponent} from "../equipments/equipments.component";

const routs: Routes = [
  {path: '', redirectTo: 'workouts', pathMatch: 'full'},
  {path: 'workouts', component: WorkoutsComponent},
  {path: 'equipments', component: EquipmentsComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
