import {Component, OnInit} from '@angular/core';
import {WorkoutService} from "../workout.service";
import {ActivatedRoute} from "@angular/router";
import {Workout} from "@models/workouts.model";

@Component({
  selector: 'app-workout-edit',
  templateUrl: './workout-edit.component.html',
  styleUrls: ['./workout-edit.component.css']
})
export class WorkoutEditComponent implements OnInit {
  workout: Workout;
  editMode: boolean;

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.editMode = params['id'] != null;
      if (this.editMode) {
        this.workout = this.workoutService.getWorkout(parseInt(params.id));
        return;
      }
      this.workout = new Workout();
    });
  }

  addWorkout(workout: Workout) {
    this.workoutService.addWorkout(workout);
  }

  updateWorkout(workout: Workout) {
    this.workoutService.updateWorkout(workout);
  }

}
