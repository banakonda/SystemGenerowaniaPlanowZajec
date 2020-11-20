import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StudyFieldService } from '../study-field.service';
import { newStudyField } from './default-field';

@Component({
  selector: 'app-create-field',
  templateUrl: './create-field.component.html',
})
export class CreateFieldComponent {
  step = 1;
  lastStep = 1;
  newStudyField = newStudyField();

  constructor(
    private studyFieldService: StudyFieldService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  createStudyField(): void {
    let error = 0;
    try {
      this.studyFieldService.createStudyField(this.newStudyField).subscribe();
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
