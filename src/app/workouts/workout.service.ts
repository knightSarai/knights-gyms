import {Injectable} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {Equipment} from "@models/equipment.model";
import {EquipmentsService} from "../equipments/equipments.service";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [
    new Workout(
      1,
      'Knight Workout I',
      new Date(),
      '20x Pull Ups',
      [new Equipment(1, 'Pull Up Bar', 1)]
    ),
    new Workout(
      2,
      'Knight Workout II',
      new Date(),
      '30x Push Ups',
      [new Equipment(2, 'Band', 1), new Equipment(4, 'Mat', 1) ]
    ),
    new Workout(
      3,
      'Knight Workout II',
      new Date(),
      '30x Dips',
      [new Equipment(3, 'Dips Bar', 2)]
    ),
  ];

  constructor(private equipmentsService: EquipmentsService) {
  }

  _createNewWorkout(workout: Workout, id: number = null) {
    const newId = id ?? this.getNewId();
    return new Workout(
      newId,
      workout.name,
      workout.date,
      workout.details,
      workout.equipments
    )
  }


  getNewId () {
    return this.workouts.length + 1;
  }

  getWorkouts() {
    return [...this.workouts];
  }

  addEquipmentsToList(equipments: Equipment[]) {
    this.equipmentsService.addEquipments(equipments);
  }

  getWorkout(id: number) {
    return {...this.workouts.find(workout => workout.id === id)};
  }

  addWorkout(workout: Workout) {
    const newWorkout = this._createNewWorkout(workout);
    this.workouts.push(newWorkout);
  }

  updateWorkout(workout: Workout) {
    const workouts = [...this.workouts];
    const index = this.workouts.findIndex(w => w.id === workout.id);

    workouts[index] = workout;
    this.workouts = workouts;
  }
}
