import { Component, Input, OnInit } from '@angular/core';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';

@Component({
  selector: 'app-create-schedule-step-one',
  templateUrl: './create-schedule-step-one.component.html',
})
export class CreateScheduleStepOneComponent implements OnInit {
  @Input() newSchedule: any;
  studyFields: StudyFieldAPI[];
  semesterTypes = [{ id: 1, name: 'Zimowy' }, { id: 2, name: 'Letni' }];
  assignments = [{ id: 1, name: 'Przydział 1' }, { id: 2, name: 'Przydział 2' }];
  lessonWidth = [2, 3];

  constructor(
    private studyFieldService: StudyFieldService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(fields => this.studyFields = fields,
      () => { },
      () => this.newSchedule.studyFieldID = this.studyFields[0].id);
  }
}
