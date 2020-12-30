import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClassRoomAPI } from 'src/app/data/models/ClassRoom';
import { ClassRoomService } from '../class-rooms.service';

@Component({
  selector: 'app-edit-field',
  template: `
    <div *ngIf="editedClassRoom$ | async as editedClassRoom">
      <app-create-class-room [classRoom]="editedClassRoom"></app-create-class-room>
    </div>
  `,
})
export class EditClassRoomComponent {
  editedClassRoom$: Observable<ClassRoomAPI>;

  constructor(
    private classRoomsService: ClassRoomService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.editedClassRoom$ = this.classRoomsService.getClassRoom(params['id']);
    });
  }
}
