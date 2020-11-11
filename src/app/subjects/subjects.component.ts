import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from '../data/models/StudyField';
import { SubjectAPI } from '../data/models/Subject';
import { StudyFieldService } from '../study-field/study-field.service';
import { SubjectsService } from './subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent implements OnInit {
  buttons: StudyFieldAPI[] = [];
  selected: any;
  listItems$: Observable<SubjectAPI[]>;

  constructor(
    private subjectsService: SubjectsService,
    private studyFieldService: StudyFieldService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(
      q => this.buttons = q,
      () => { },
      () => this.selected = this.buttons[0].id);
    this.refreshList();
  }

  deleteSubject(id: number): void {
    this.subjectsService.deleteSubjects(id).subscribe(
      () => { },
      () => { },
      () => this.refreshList(),
    );
  }

  refreshList(): void {
    this.listItems$ = this.subjectsService.getSubjects();
  }
}
