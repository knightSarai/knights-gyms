import {Component, Input, OnInit} from '@angular/core';
import {Workout} from "@models/workouts.model";

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
  @Input() workout: Workout;

  constructor() { }

  ngOnInit(): void {
  }

}
