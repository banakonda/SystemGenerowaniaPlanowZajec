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
  classL = "";
  classE = "";
  classLab = "";
  classS = "";

  changeL(value: string) {
    if (this.newSubject.schedule.lectures.enabled && this.newSubject.schedule.lectures.classroom && value)
      this.newSubject.schedule.lectures.classroom = value.replace(' ', '').split(',');
  }

  changeE(value: string) {
    if (this.newSubject.schedule.exercise.enabled && this.newSubject.schedule.exercise.classroom && value)
      this.newSubject.schedule.exercise.classroom = value.replace(' ', '').split(',');
  }

  changeLab(value: string) {
    if (this.newSubject.schedule.laboratories.enabled && this.newSubject.schedule.laboratories.classroom && value)
      this.newSubject.schedule.laboratories.classroom = value.replace(' ', '').split(',');
  }

  changeS(value: string) {
    if (this.newSubject.schedule.seminars.enabled && this.newSubject.schedule.seminars.classroom && value)
      this.newSubject.schedule.seminars.classroom = value.replace(' ', '').split(',');
  }

  constructor() { }
}
