import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssignmentAPI } from '../data/models/Assignment';
import { PartsService } from './parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent {

  listItems$: Observable<AssignmentAPI[]>;

  constructor(
    private partsService: PartsService,
  ) {
    this.refreshList();
  }

  refreshList(): void {
    this.listItems$ = this.partsService.getAssignments();
  }

  deleteAssignment(id: string): void {
    this.partsService.deleteAssignment(id).subscribe(
      () => this.refreshList(),
    );
  }

}