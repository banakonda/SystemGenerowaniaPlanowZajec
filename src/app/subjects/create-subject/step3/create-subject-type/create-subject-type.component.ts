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
  classrooms: ClassRoomAPI[];
  selectedClassroom: ClassRoomAPI;
  @Input() sType: ScheduleActivities;
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

      setInterval( () => console.log(this.sType), 2000 
      )
      
  }

  changeModel(value: string) {
    if (this.sType.enabled && value)
      this.sType.classroom = value.replace(' ', '').split(',');
  }

  addClass(): void {
    if (this.sType.enabled) {
      if(!this.sType.classroom.find(elem => elem === this.selectedClassroom.name)) {
        this.sType.classroom.push(this.selectedClassroom.name)
      } 
    }
  }

  deleteClassroom(id: number): void {
    this.sType.classroom.splice(id, 1);
  }
}
