import {Component, Input} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {WorkoutService} from "../../workout.service";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  @Input() workout: Workout;

  constructor(private workoutService: WorkoutService) {
  }

  onWorkoutSelected() {
    this.workoutService.workoutSelected.emit(this.workout);
  }
}
