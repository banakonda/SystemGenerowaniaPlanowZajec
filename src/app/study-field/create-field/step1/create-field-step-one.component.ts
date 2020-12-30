import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { StudyField } from 'src/app/data/models/StudyField';

@Component({
  selector: 'app-create-field-step-one',
  templateUrl: './create-field-step-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateFieldStepOneComponent {
  @Input() newStudyField: StudyField;
}
