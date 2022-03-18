import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Workout} from "@models/workouts.model";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  @Input() workout: Workout;
  @Output() workoutSelected = new EventEmitter<void>();

  onWorkoutSelected() {
    this.workoutSelected.emit();
  }

}
