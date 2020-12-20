import { Component, Input, OnInit } from '@angular/core';
import { ClassRoomService } from 'src/app/class-rooms/class-rooms.service';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';
import { SubjectsService } from 'src/app/subjects/subjects.service';
import { TeachersService } from 'src/app/teachers/teachers.service';

@Component({
  selector: 'app-create-schedule-step-one',
  templateUrl: './create-schedule-step-one.component.html',
})
export class CreateScheduleStepOneComponent implements OnInit {
  @Input() newSchedule: any;
  studyFields: StudyFieldAPI[];

  constructor(
    private studyFieldService: StudyFieldService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(fields => this.studyFields = fields,
      () => { },
      () => this.newSchedule.studyFieldID = this.studyFields[0].id);
  }
}
