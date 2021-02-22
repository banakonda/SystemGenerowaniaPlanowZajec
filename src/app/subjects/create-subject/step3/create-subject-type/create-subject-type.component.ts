import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ClassRoomService } from 'src/app/class-rooms/class-rooms.service';
import { ClassRoomAPI } from 'src/app/data/models/ClassRoom';
import { ScheduleActivities } from 'src/app/data/models/Subject';

@Component({
  selector: 'app-create-subject-type',
  templateUrl: './create-subject-type.component.html',
  styleUrls: ['./create-subject-type.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateSubjectTypeComponent {
  type: ScheduleActivities;
  class: string = "";
  hours: number = 0;
  classrooms: ClassRoomAPI[];
  selectedClassroom: ClassRoomAPI;
  @Input() set sType(value: ScheduleActivities) {
    this.type = value;
    this.hours = value.hours;
    this.class = value.classroom.join(", ");
  }
  @Input() typeName: string = "";
  @Input() name: string;

  constructor(
    
    private classService: ClassRoomService, 
    
  ) { 
    this.classService.getClassRooms().subscribe(
      classrooms => {
        this.classrooms = classrooms;
      },
      () => { });

      setTimeout( () => console.log(this.classrooms), 100 
      )
      
  }

  changeModel(value: string) {
    if (this.type.enabled && value)
      this.type.classroom = value.replace(' ', '').split(',');
  }

  addClass(): void {
    if (this.type.enabled) {
      if(!this.type.classroom.find(elem => elem === this.selectedClassroom.name)) {
        this.type.classroom.push(this.selectedClassroom.name)
      } 
    }
  }

  deleteClassroom(id: number): void {
    this.type.classroom.splice(id, 1);
  }
}
