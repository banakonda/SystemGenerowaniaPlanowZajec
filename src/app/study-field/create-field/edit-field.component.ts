import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from '../study-field.service';

@Component({
  selector: 'app-edit-field',
  template: `
    <div *ngIf="editedStudyField$ | async as editedStudyField">
      <app-create-field [studyField]="editedStudyField"></app-create-field>
    </div>
  `,
})
export class EditFieldComponent {
  editedStudyField$: Observable<StudyFieldAPI>;

  constructor(
    private studyFieldService: StudyFieldService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.editedStudyField$ = this.studyFieldService.getStudyField(params['id']);
    });
  }
}
