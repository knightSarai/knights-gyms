import {Component, OnInit} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {WorkoutService} from "../workout.service";

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[];
  constructor(private workoutService: WorkoutService) {
  }

  ngOnInit(){
     this.workouts = this.workoutService.getWorkouts();
  }
}
