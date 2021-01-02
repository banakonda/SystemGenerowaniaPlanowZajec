import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SubjectAPI } from 'src/app/data/models/Subject';
import { SubjectsService } from '../subjects.service';
import { newSubject } from './default-subject';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
})
export class CreateSubjectComponent {
  step = 1;
  lastStep = 4;
  edit = false;

  newSubject = newSubject();
  @Input() set subject(value: SubjectAPI) {
    this.newSubject = value;
    this.edit = true;
  }
  constructor(
    private subjectsService: SubjectsService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  createSubject(): void {
    let error = 0;
    try {
      if (!this.edit)
        this.subjectsService.createSubjects(this.newSubject).subscribe(q => { this.snackBar(q); });
      else
        this.subjectsService.editSubjects(this.newSubject as SubjectAPI).subscribe(q => { this.snackBar(q); });
    } catch {
      error = 1;
    } finally {
    }
  }

  snackBar(q: any) {
    this._snackBar.open(q, undefined, {
      duration: 3000,
    });
    this.router.navigate(['/subjects']);
  }
}
