import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AssignmentAPI } from "src/app/data/models/Assignment";
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-edit-part',
  template: `
    <div *ngIf="editedPart$ | async as editedPart">
      <app-create-parts [part]="editedPart"></app-create-parts>
    </div>
  `,
})
export class EditPartComponent {
    editedPart$: Observable<AssignmentAPI>;

  constructor(
    private partsService: PartsService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.editedPart$ = this.partsService.getAssignment(params['id']);
    });
  }
}