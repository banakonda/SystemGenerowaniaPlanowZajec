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
  titles: TitleAPI[];

  constructor(
    private teachersService: TeachersService,
    private titleService: TitleService,
  ) {
    this.titleService.getTitles().subscribe(t => this.titles = t);
    this.refreshList();
  }
  getTitleToDisplay(item: TeacherAPI): string {
    return this.titles.find(q => q.id === item.titleID).name;
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
