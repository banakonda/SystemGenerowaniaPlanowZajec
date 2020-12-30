import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from '../study-field.service';
import { newStudyField } from './default-field';

@Component({
  selector: 'app-create-field',
  templateUrl: './create-field.component.html',
})
export class CreateFieldComponent {
  step: number = 1;
  lastStep: number = 1;
  edit: boolean = false;

  newStudyField = newStudyField();
  @Input() set studyField(value: StudyFieldAPI) {
    this.newStudyField = value;
    this.edit = true;
  }

  constructor(
    private studyFieldService: StudyFieldService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  createStudyField(): void {
    let error = 0;
    try {
      if (!this.edit)
        this.studyFieldService.createStudyField(this.newStudyField).subscribe();
      else
        this.studyFieldService.editStudyField(this.newStudyField as StudyFieldAPI).subscribe();
    } catch {
      error = 1;
    } finally {
      if (!error) {
        this._snackBar.open('Pomyślnie utworzono nowy kierunek ' + this.newStudyField.name, undefined, {
          duration: 3000,
        });
        this.router.navigate(['/fields']);
      }
    }
  }
}
