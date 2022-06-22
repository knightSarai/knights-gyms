import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {WorkoutsComponent} from './workouts/workouts.component';
import {WorkoutListComponent} from './workouts/workout-list/workout-list.component';
import {WorkoutDetailComponent} from './workouts/workout-detail/workout-detail.component';
import {WorkoutComponent} from './workouts/workout-list/workout/workout.component';
import {EquipmentsComponent} from './equipments/equipments.component';
import {EquipmentEditComponent} from './equipments/equipment-edit/equipment-edit.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from './directives/dropdown.directive';
import {RoutingModule} from "./routing/routing.module";
import { WorkoutIndexComponent } from './workouts/workout-index/workout-index.component';
import { WorkoutEditComponent } from './workouts/workout-edit/workout-edit.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkoutsComponent,
    WorkoutListComponent,
    WorkoutDetailComponent,
    WorkoutComponent,
    EquipmentsComponent,
    EquipmentEditComponent,
    DropdownDirective,
    WorkoutIndexComponent,
    WorkoutEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
