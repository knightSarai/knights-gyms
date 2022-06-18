import {Component, OnDestroy, OnInit} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {WorkoutService} from "../workout.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit, OnDestroy {
  workout: Workout;
  subscribtion: Subscription;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribtion = this.route.params.subscribe(params => {
      this.workout = this.workoutService.getWorkout(parseInt(params.id))
    });
  }

  addWorkoutEquipmentToList() {
    this.workoutService.addEquipmentsToList(this.workout.equipments);
  }

  deleteWorkout() {
    this.workoutService.deleteWorkout(this.workout.id)
    this.router.navigate(['/workouts']);
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
