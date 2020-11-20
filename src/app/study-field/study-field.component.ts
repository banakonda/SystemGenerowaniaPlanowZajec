import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from '../data/models/StudyField';
import { StudyFieldService } from './study-field.service';

@Component({
  selector: 'app-study-field',
  templateUrl: './study-field.component.html',
})
export class StudyFieldComponent implements OnInit {
  listItems$: Observable<StudyFieldAPI[]>;

  constructor(
    private studyFieldService: StudyFieldService,
  ) { }

  ngOnInit(): void {
    this.setDefault();
  }

  setDefault(): void {
    this.refreshList();
  }
  deleteStudyField(id: number): void {
    this.studyFieldService.deleteStudyField(id).subscribe(
      () => { },
      () => this.refreshList(),
      () => { },
    );
  }

  refreshList(): void {
    this.listItems$ = this.studyFieldService.getStudyFields();
  }
}
