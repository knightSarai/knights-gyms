import {Injectable, EventEmitter} from '@angular/core';
import {Workout} from "@models/workouts.model";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workoutSelected = new EventEmitter<Workout>();
  private workouts: Workout[] = [
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

  getWorkouts() {
    return [...this.workouts];
  }
}
