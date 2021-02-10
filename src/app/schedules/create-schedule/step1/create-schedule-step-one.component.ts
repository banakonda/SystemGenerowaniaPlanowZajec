import { Component, Input, OnInit } from '@angular/core';
import { AssignmentAPI } from 'src/app/data/models/Assignment';
import { PartsService } from 'src/app/parts/parts.service';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';

@Component({
  selector: 'app-create-schedule-step-one',
  templateUrl: './create-schedule-step-one.component.html',
})
export class CreateScheduleStepOneComponent implements OnInit {
  @Input() newSchedule: any;
  studyFields: StudyFieldAPI[];
  assignments: AssignmentAPI[];
  semesterTypes = [{ id: 1, name: 'Zimowy' }, { id: 2, name: 'Letni' }];
  lessonWidth = [2, 3];

  constructor(
    private studyFieldService: StudyFieldService,
    private partsService: PartsService,
  ) { 
    this.partsService.getAssignments().subscribe(
      assignments => {
        this.assignments = assignments;
      },
      () => { });
  }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(fields => this.studyFields = fields,
      () => { },
      () => this.newSchedule.studyFieldID = this.studyFields[0].id);
  }
}
