import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Teacher, TeacherAPI } from 'src/app/data/models/Teacher';
import { TeachersService } from '../teachers.service';
import { newTeacher } from './default-teacher';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
})
export class CreateTeacherComponent {
  step = 1;
  lastStep = 2;
  edit = false;

  newTeacher = newTeacher();
  @Input() set teacher(value: TeacherAPI) {
    this.newTeacher = value;
    this.edit = true;
  }
  constructor(
    private teachersService: TeachersService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }
  createTeacher(): void {
    let error = 0;
    try {
      if (!this.edit)
        this.teachersService.createTeacher(this.newTeacher).subscribe(q => { this.snackBar(q); });
      else
        this.teachersService.editTeacher(this.newTeacher as TeacherAPI).subscribe(q => { this.snackBar(q); });
    } catch {
      error = 1;
    } finally {
    }
  }

  snackBar(q: any) {
    this._snackBar.open(q, undefined, {
      duration: 3000,
    });
    this.router.navigate(['/teachers']);
  }
}
