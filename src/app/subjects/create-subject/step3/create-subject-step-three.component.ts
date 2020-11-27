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

  get classL(): string {
    if (this.newSubject.schedule.lectures.enabled) {
      return this.newSubject.schedule.lectures.classRooms.join(', ');
    }
  }
  set classL(value: string) {
    if (this.newSubject.schedule.lectures.enabled) {
      this.newSubject.schedule.lectures.classRooms = value.replace(' ', '').split(',');
    }
  }

  get classE(): string {
    if (this.newSubject.schedule.exercise.enabled) {
      return this.newSubject.schedule.exercise.classRooms.join(', ');
    }
  }
  set classE(value: string) {
    if (this.newSubject.schedule.exercise.enabled) {
      this.newSubject.schedule.exercise.classRooms = value.replace(' ', '').split(',');
    }
  }

  get classLab(): string {
    if (this.newSubject.schedule.laboratories.enabled) {
      return this.newSubject.schedule.laboratories.classRooms.join(', ');
    }
  }
  set classLab(value: string) {
    if (this.newSubject.schedule.laboratories.enabled) {
      this.newSubject.schedule.laboratories.classRooms = value.replace(' ', '').split(',');
    }
  }

  get classS(): string {
    if (this.newSubject.schedule.seminars.enabled) {
      return this.newSubject.schedule.seminars.classRooms.join(', ');
    }
  }
  set classS(value: string) {
    if (this.newSubject.schedule.seminars.enabled) {
      this.newSubject.schedule.seminars.classRooms = value.replace(' ', '').split(',');
    }
  }

  constructor() { }
}
