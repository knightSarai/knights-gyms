import {Injectable, EventEmitter} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {Equipment} from "@models/equipment.model";
import {EquipmentsService} from "../equipments/equipments.service";

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
      '20x Pull Ups',
      [new Equipment('Pull Up Bar', 1)]
    ),
    new Workout(
      2,
      'Knight Workout II',
      new Date(),
      '30x Push Ups',
      [new Equipment('Band', 1)]
    ),
    new Workout(
      3,
      'Knight Workout II',
      new Date(),
      '30x Dips',
      [new Equipment('Dips Bar', 2)]
    ),
  ];

  constructor(private equipmentsService: EquipmentsService) {
  }

  getWorkouts() {
    return [...this.workouts];
  }

  addEquipmentsToList(equipments: Equipment[]) {
    this.equipmentsService.addEquipments(equipments)
  }

  getWorkout(id: number) {
    return {...this.workouts.find(workout => workout.id === id)};
  }

  addWorkout(workout: Workout) {
    workout.id = this.workouts.length + 1;
    this.workouts.push(workout);
  }

  updateWorkout(workout: Workout) {
    const index = this.workouts.findIndex(w => w.id === workout.id);
    this.workouts[index] = workout;
  }

}
