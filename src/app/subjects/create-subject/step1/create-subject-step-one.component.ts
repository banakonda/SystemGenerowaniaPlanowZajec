import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subject } from 'src/app/data/models/Subject';

@Component({
  selector: 'app-create-subject-step-one',
  templateUrl: './create-subject-step-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateSubjectStepOneComponent {
  @Input() newSubject: Subject;
  constructor() { }
}
