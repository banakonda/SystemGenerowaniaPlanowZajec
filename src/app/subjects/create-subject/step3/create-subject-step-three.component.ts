import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subject } from 'src/app/data/models/Subject';

@Component({
  selector: 'app-create-subject-step-three',
  templateUrl: './create-subject-step-three.component.html',
  styleUrls: ['./create-subject-step-three.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateSubjectStepThreeComponent {
  @Input() newSubject: Subject;

  get hourLectures(): number {
    if (this.newSubject.schedule.lectures.enabled) {
      return this.newSubject.schedule.lectures.hours;
    }
  }
  set hourLectures(value: number) {
    if (this.newSubject.schedule.lectures.enabled) {
      this.newSubject.schedule.lectures.hours = value;
    }
  }
  get hourExercise(): number {
    if (this.newSubject.schedule.exercise.enabled) {
      return this.newSubject.schedule.exercise.hours;
    }
  }
  set hourExercise(value: number) {
    if (this.newSubject.schedule.exercise.enabled) {
      this.newSubject.schedule.exercise.hours = value;
    }
  }
  get hourLaboratories(): number {
    if (this.newSubject.schedule.laboratories.enabled) {
      return this.newSubject.schedule.laboratories.hours;
    }
  }
  set hourLaboratories(value: number) {
    if (this.newSubject.schedule.laboratories.enabled) {
      this.newSubject.schedule.laboratories.hours = value;
    }
  }
  get hourSeminars(): number {
    if (this.newSubject.schedule.seminars.enabled) {
      return this.newSubject.schedule.seminars.hours;
    }
  }
  set hourSeminars(value: number) {
    if (this.newSubject.schedule.seminars.enabled) {
      this.newSubject.schedule.seminars.hours = value;
    }
  }
  constructor() { }
}
