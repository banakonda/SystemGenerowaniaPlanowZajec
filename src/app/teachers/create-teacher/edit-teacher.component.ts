import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { TeacherAPI } from 'src/app/data/models/Teacher';
import { TeachersService } from '../teachers.service';


@Component({
  selector: 'app-edit-teacher',
  template: `
    <div *ngIf="editedTeacher$ | async as editedTeacher">
      <app-create-teacher [teacher]="editedTeacher"></app-create-teacher>
    </div>
  `,
})
export class EditTeacherComponent {
  editedTeacher$: Observable<TeacherAPI>;

  constructor(
    private teachersService: TeachersService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.editedTeacher$ = this.teachersService.getTeacher(params['id']);
    });
  }
}
