import {Component, OnInit} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {WorkoutService} from "../workout.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
  workout: Workout;

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.workout = this.workoutService.getWorkout(parseInt(params.id))
    });
  }

  addWorkoutEquipmentToList() {
    this.workoutService.addEquipmentsToList(this.workout.equipments);
  }
}
