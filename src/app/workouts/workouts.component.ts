import {Component, OnInit} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {WorkoutService} from "./workout.service";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  selectedWorkout: Workout;

  constructor(private workoutService: WorkoutService) {
  }

  ngOnInit(): void {
  }

}
