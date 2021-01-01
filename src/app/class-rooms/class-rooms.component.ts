import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassRoomAPI } from '../data/models/ClassRoom';
import { ClassRoomService } from './class-rooms.service';

@Component({
  selector: 'app-class-rooms',
  templateUrl: './class-rooms.component.html',
})
export class ClassRoomsComponent {
  listItems$: Observable<ClassRoomAPI[]>;

  constructor(
    private classRoomsService: ClassRoomService,
  ) {
    this.refreshList();
  }

  deleteClassRooms(id: string): void {
    this.classRoomsService.deleteClassRooms(id).subscribe(
      () => this.refreshList(),
    );
  }
  refreshList(): void {
    this.listItems$ = this.classRoomsService.getClassRooms();
  }
}
