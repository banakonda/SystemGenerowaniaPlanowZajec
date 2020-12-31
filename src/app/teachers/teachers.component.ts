import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherAPI } from '../data/models/Teacher';
import { TitleAPI } from '../data/models/Title';
import { TitleService } from '../data/title.service';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
})
export class TeachersComponent {
  listItems$: Observable<TeacherAPI[]>;

  constructor(
    private teachersService: TeachersService,
  ) {
    this.refreshList();
  }
  refreshList(): void {
    this.listItems$ = this.teachersService.getTeachers();
  }
  deleteTeacher(id: string): void {
    this.teachersService.deleteTeacher(id).subscribe(
      () => this.refreshList(),
    );
  }

}
