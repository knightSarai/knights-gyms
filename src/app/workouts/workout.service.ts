import {Injectable} from '@angular/core';
import {Workout} from "@models/workouts.model";
import {Equipment} from "@models/equipment.model";
import {EquipmentsService, WorkoutEquipmentResponse} from "../equipments/equipments.service";
import { map, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface WorkoutResponse {
  id: number;
  name: string;
  details: string;
  created: Date;
  workout_equipment?: WorkoutEquipmentResponse;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  workoutChanged = new Subject<Workout[]>();
  private workouts: Workout[] = [];

  constructor(private http: HttpClient, private equipmentsService: EquipmentsService) {
  }

  // _createWorkout(workout: Workout, id: number = null) {
  //   const newId = id ?? this.getNewId();
  //   return new Workout(
  //     newId,
  //     workout.name,
  //     workout.date,
  //     workout.details,
  //     workout.equipments
  //   )
  // }

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

  _setWorkouts(workouts: Workout[]) {
    this.workouts = workouts;
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
    this._addToList([])
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
      .get<WorkoutResponse[]>('http://localhost:8000/api/workouts/')
      .pipe(map(workouts => {
        return workouts.map(workout => {
          const newEquipment = workout.workout_equipment?.map(({equipment, amount})=> {
              return new Equipment(
                equipment.id,
                equipment.name,
                amount
              )
          }) ?? []

          return new Workout(
            workout.id,
            workout.name,
            workout.created,
            workout.details,
            newEquipment
          )
        })
      }))
      .subscribe(workouts => {
        this._setWorkouts(workouts)
      });

  }
}
