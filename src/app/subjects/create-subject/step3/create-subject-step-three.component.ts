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
    if (this.newSubject.schedule.lectures.enabled && this.newSubject.schedule.lectures.classroom) {
      return this.newSubject.schedule.lectures.classroom.join(', ');
    }
  }
  set classL(value: string) {
    if (this.newSubject.schedule.lectures.enabled && this.newSubject.schedule.lectures.classroom) {
      this.newSubject.schedule.lectures.classroom = value.replace(' ', '').split(',');
    }
  }

  get classE(): string {
    if (this.newSubject.schedule.exercise.enabled && this.newSubject.schedule.exercise.classroom) {
      return this.newSubject.schedule.exercise.classroom.join(', ');
    }
  }
  set classE(value: string) {
    if (this.newSubject.schedule.exercise.enabled && this.newSubject.schedule.exercise.classroom) {
      this.newSubject.schedule.exercise.classroom = value.replace(' ', '').split(',');
    }
  }

  get classLab(): string {
    if (this.newSubject.schedule.laboratories.enabled && this.newSubject.schedule.laboratories.classroom) {
      return this.newSubject.schedule.laboratories.classroom.join(', ');
    }
  }
  set classLab(value: string) {
    if (this.newSubject.schedule.laboratories.enabled && this.newSubject.schedule.laboratories.classroom) {
      this.newSubject.schedule.laboratories.classroom = value.replace(' ', '').split(',');
    }
  }

  get classS(): string {
    if (this.newSubject.schedule.seminars.enabled && this.newSubject.schedule.seminars.classroom) {
      return this.newSubject.schedule.seminars.classroom.join(', ');
    }
  }
  set classS(value: string) {
    if (this.newSubject.schedule.seminars.enabled && this.newSubject.schedule.seminars.classroom) {
      this.newSubject.schedule.seminars.classroom = value.replace(' ', '').split(',');
    }
  }

  constructor() { }
}
