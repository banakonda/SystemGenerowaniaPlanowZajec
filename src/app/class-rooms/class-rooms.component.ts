import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassRoomAPI } from '../data/models/ClassRoom';
import { StudyFieldAPI } from '../data/models/StudyField';
import { StudyFieldService } from '../study-field/study-field.service';
import { ClassRoomService } from './class-rooms.service';

@Component({
  selector: 'app-class-rooms',
  templateUrl: './class-rooms.component.html',
})
export class ClassRoomsComponent implements OnInit {
  listItems$: Observable<ClassRoomAPI[]>;
  constructor(
    private studyFieldService: StudyFieldService,
    private classRoomsService: ClassRoomService,
  ) { }

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(): void {
    this.listItems$ = this.classRoomsService.getClassRooms();
  }

  deleteClassRooms(id: number): void {
    this.classRoomsService.deleteClassRooms(id).subscribe(
      () => { },
      () => { },
      () => this.refreshList(),
    );
  }
}
