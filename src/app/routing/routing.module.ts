import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {WorkoutsComponent} from "../workouts/workouts.component";
import {EquipmentsComponent} from "../equipments/equipments.component";
import {WorkoutIndexComponent} from "../workouts/workout-index/workout-index.component";
import {WorkoutDetailComponent} from "../workouts/workout-detail/workout-detail.component";
import {WorkoutEditComponent} from "../workouts/workout-edit/workout-edit.component";

const routs: Routes = [
  {path: '', redirectTo: 'workouts', pathMatch: 'full'},
  {
    path: 'workouts', component: WorkoutsComponent, children: [
      {path: '', component: WorkoutIndexComponent},
      {path: 'new', component: WorkoutEditComponent},
      {path: ':id', component: WorkoutDetailComponent},
      {path: ':id/edit', component: WorkoutEditComponent},
    ]
  },
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
export class RoutingModule {
}
