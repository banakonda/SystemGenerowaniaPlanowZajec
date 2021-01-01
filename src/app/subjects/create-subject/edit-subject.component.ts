import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectAPI } from 'src/app/data/models/Subject';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-edit-field',
  template: `
    <div *ngIf="editedSubject$ | async as editedSubject">
      <app-create-subject [subject]="editedSubject"></app-create-subject>
    </div>
  `,
})
export class EditSubjectComponent {
  editedSubject$: Observable<SubjectAPI>;

  constructor(
    private subjectService: SubjectsService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.editedSubject$ = this.subjectService.getSubject(params['id']);
    });
  }
}
