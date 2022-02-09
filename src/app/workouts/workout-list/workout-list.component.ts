import {Component, OnInit} from '@angular/core';
import {Workout} from "../workouts.model";

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [
    new Workout(
      1,
      'Knight Workout I',
      new Date(),
      '20x Pull Ups'
    ),
    new Workout(
      2,
      'Knight Workout II',
      new Date(),
      '30x Push Ups'
    ),
    new Workout(
      3,
      'Knight Workout II',
      new Date(),
      '30x Push Ups'
    ),
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.workouts);
  }

}
