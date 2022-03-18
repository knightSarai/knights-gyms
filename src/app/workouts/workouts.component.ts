import {Component, OnInit} from '@angular/core';
import {Workout} from "@models/workouts.model";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  selectedWorkout: Workout;

  constructor() {
  }

  ngOnInit(): void {
  }

  onWorkoutSelected(workout: Workout) {
    console.log("Workout selected: ", workout);
    this.selectedWorkout = workout;
  }

}
