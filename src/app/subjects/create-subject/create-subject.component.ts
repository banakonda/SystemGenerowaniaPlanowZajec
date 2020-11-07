import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SubjectsService } from '../subjects.service';
import { newSubject } from './default-subject';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
})
export class CreateSubjectComponent {
  step = 1;
  lastStep = 4;

  newSubject = { ...newSubject };

  constructor(
    private subjectsService: SubjectsService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  createSubject(): void {
    let error = 0;
    try {
      this.subjectsService.createSubjects(this.newSubject).subscribe();
    } catch {
      error = 1;
    } finally {
      if (!error) {
        this._snackBar.open('Pomyślnie utworzono nowy kierunek ' + this.newSubject.name, undefined, {
          duration: 3000,
        });
        this.router.navigate(['/subjects']);
      }
    }
  }
}
