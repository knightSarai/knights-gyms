import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutIndexComponent } from './workout-index.component';

describe('WorkoutIndexComponent', () => {
  let component: WorkoutIndexComponent;
  let fixture: ComponentFixture<WorkoutIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
