import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { StudyField } from 'src/app/data/models/StudyField';

@Component({
  selector: 'app-create-field-step-one',
  templateUrl: './create-field-step-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateFieldStepOneComponent {
  @Input() newStudyField: StudyField;
  fullTime = [{ id: 1, name: 'Stacjonarne' }, { id: 2, name: 'Niestacjonarne' }];
  erasmus = [{ id: 1, name: 'Tak' }, { id: 2, name: 'Nie' }];
}
