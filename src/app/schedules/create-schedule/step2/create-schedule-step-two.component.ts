import { Component, Input, OnInit } from '@angular/core';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';

@Component({
  selector: 'app-create-schedule-step-two',
  templateUrl: './create-schedule-step-two.component.html',
  styleUrls: ['./create-schedule-step-two.component.scss']
})
export class CreateScheduleStepTwoComponent implements OnInit {
  @Input() newSchedule: any;
  studyFields: StudyFieldAPI[];

  get nameOfStudyField(): string {
    if (!this.studyFields) {
      return '';
    }
    return this.studyFields.filter(q => q.id = this.newSchedule.studyFieldID)[0].name;
  }

  constructor(
    private studyFieldService: StudyFieldService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(q => this.studyFields = q);
  }


}
