import {Component, OnInit} from '@angular/core';
import {WorkoutService} from "../workout.service";
import {ActivatedRoute} from "@angular/router";
import {Workout} from "@models/workouts.model";
import { FormArray, FormControl,  FormControlName,  FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common'
import { Equipment } from '@models/equipment.model';


@Component({
  selector: 'app-workout-edit',
  templateUrl: './workout-edit.component.html',
  styleUrls: ['./workout-edit.component.css']
})
export class WorkoutEditComponent implements OnInit {
  workout: Workout;
  editMode: boolean;
  workoutForm: FormGroup;

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) {
  }

  get controls() {
    return (<FormArray>this.workoutForm.get('equipments')).controls;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.editMode = params['id'] != null;
      this.workout = this.editMode ? this.workoutService.getWorkout(parseInt(params.id)) : new Workout();
      this.initForm()
    });
  }

  createEquipmentFormGroup(equipment?: Equipment) {
    const name = equipment ? equipment.name : '';
    const amount = equipment ? equipment.amount : 0;
    return new FormGroup({
            'name': new FormControl(name),
            'amount': new FormControl(amount)
          })
    
  }

  initForm(){
    const equipments = new FormArray([]);
    for (let equipment of this.workout.equipments) {
      equipments.push(this.createEquipmentFormGroup(equipment))
    }

    this.workoutForm = new FormGroup({
      "name": new FormControl(this.workout.name),
      "date": new FormControl(formatDate(this.workout.date, 'yyy-MM-dd', 'en')),
      "details": new FormControl(this.workout.details),
      equipments
    })
  }

  onSubmit() {
    console.log(this.workoutForm)
  }

  onAddEquipment() {
    (<FormArray>this.workoutForm.get('equipments')).push(this.createEquipmentFormGroup())

  }
  
  
  addWorkout(workout: Workout) {
    this.workoutService.addWorkout(workout);
  }

  updateWorkout(workout: Workout) {
    this.workoutService.updateWorkout(workout);
  }

}
