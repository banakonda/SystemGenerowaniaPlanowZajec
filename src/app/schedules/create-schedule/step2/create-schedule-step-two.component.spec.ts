import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScheduleStepTwoComponent } from './create-schedule-step-two.component';

describe('CreateScheduleStepTwoComponent', () => {
  let component: CreateScheduleStepTwoComponent;
  let fixture: ComponentFixture<CreateScheduleStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateScheduleStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScheduleStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
