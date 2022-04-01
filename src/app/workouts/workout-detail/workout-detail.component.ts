import {Component, Input, OnInit} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {WorkoutService} from "../workout.service";

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
  @Input() workout: Workout;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
  }

  addWorkoutEquipmentToList(){
    this.workoutService.addEquipmentsToList(this.workout.equipments);
  }
}
