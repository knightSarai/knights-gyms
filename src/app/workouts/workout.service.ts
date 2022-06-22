import {Injectable} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {Equipment} from "@models/equipment.model";
import {EquipmentsService} from "../equipments/equipments.service";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workoutChanged = new Subject<Workout[]>();
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

  constructor(private http: HttpClient, private equipmentsService: EquipmentsService) {
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

  _onWorkoutsChanged() {
    this.workoutChanged.next(this.getWorkouts())
  }

  _createNewWorkoutList(workouts: Workout[]) {
    this.workouts = [...this.workouts, ...workouts]
  }

  _addToList(workouts: Workout[]) {
    this._createNewWorkoutList(workouts)
    this._onWorkoutsChanged()
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
    this._addToList([newWorkout])
  }

  updateWorkout(workout: Workout) {
    const workouts = [...this.workouts];
    const index = this.workouts.findIndex(w => w.id === workout.id);

    workouts[index] = workout;
    this.workouts = workouts;
    this._onWorkoutsChanged()
  }

  deleteWorkout(id: number) {
    this.workouts = this.workouts.filter(workout => workout.id !== id)
    this._onWorkoutsChanged()
  }

  fetchWorkouts(){
    return this.http
      .get<Workout[]>('http://localhost:8000/api/workouts/')
      .subscribe(workouts => {
        console.log(workouts)
      })

  }
}
