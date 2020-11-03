import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from '../data/models/StudyField';
import { TeacherAPI } from '../data/models/Teacher';
import { TitleAPI } from '../data/models/Title';
import { TitleService } from '../data/title.service';
import { StudyFieldService } from '../study-field/study-field.service';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
})
export class TeachersComponent implements OnInit {
  buttons: StudyFieldAPI[] = [];
  selected: number;
  listItems$: Observable<TeacherAPI[]>;
  titles: TitleAPI[];

  constructor(
    private teachersService: TeachersService,
    private studyFieldService: StudyFieldService,
    private titleService: TitleService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(q => this.buttons = q);
    this.selected = this.buttons[0].id;
    this.titleService.getTitles().subscribe(t => this.titles = t);
    this.refreshList();
  }

  getTitleToDisplay(item: TeacherAPI): string {
    return this.titles.find(q => q.id === item.titleID).name;
  }

  refreshList(): void {
    this.listItems$ = this.teachersService.getTeachers();
  }

}
