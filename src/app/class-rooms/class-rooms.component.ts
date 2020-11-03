import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassRoomAPI } from '../data/models/ClassRoom';
import { DepartmentAPI } from '../data/models/Department';
import { StudyFieldAPI } from '../data/models/StudyField';
import { StudyFieldService } from '../study-field/study-field.service';
import { ClassRoomService } from './class-rooms.service';

@Component({
  selector: 'app-class-rooms',
  templateUrl: './class-rooms.component.html',
})
export class ClassRoomsComponent implements OnInit {
  buttons: StudyFieldAPI[] = [];
  selected: number;
  listItems$: Observable<ClassRoomAPI[]>;
  constructor(
    private studyFieldService: StudyFieldService,
    private classRoomsService: ClassRoomService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(q => this.buttons = q);
    this.selected = this.buttons[0].id;
    this.refreshList();
  }

  refreshList(): void {
    this.listItems$ = this.classRoomsService.getClassRooms();
  }

  deleteClassRooms(id: number): void {
    this.classRoomsService.deleteClassRooms(id);
  }
}
