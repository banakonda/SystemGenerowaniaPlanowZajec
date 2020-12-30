import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from '../data/models/StudyField';
import { StudyFieldService } from './study-field.service';

@Component({
  selector: 'app-study-field',
  templateUrl: './study-field.component.html',
})
export class StudyFieldComponent {
  listItems$: Observable<StudyFieldAPI[]>;

  constructor(
    private studyFieldService: StudyFieldService,
  ) {
    this.refreshList();
  }

  deleteStudyField(id: string): void {
    this.studyFieldService.deleteStudyField(id).subscribe(
      () => this.refreshList(),
    );
  }

  refreshList(): void {
    this.listItems$ = this.studyFieldService.getStudyFields();
  }
}
