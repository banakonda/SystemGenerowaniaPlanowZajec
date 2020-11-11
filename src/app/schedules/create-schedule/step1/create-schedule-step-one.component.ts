import { Component, OnInit } from '@angular/core';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';

@Component({
  selector: 'app-create-schedule-step-one',
  templateUrl: './create-schedule-step-one.component.html',
})
export class CreateScheduleStepOneComponent implements OnInit {
  studyFields: StudyFieldAPI[];
  newSchedule: any = {
    studyFieldID: 1,
  };

  constructor(
    private studyFieldService: StudyFieldService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(fields => this.studyFields = fields,
      () => { },
      () => this.newSchedule.studyFieldID = this.studyFields[0].id);
  }

}
