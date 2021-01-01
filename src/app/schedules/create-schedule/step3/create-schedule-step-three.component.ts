import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';
import { SchedulesService } from '../../schedules.service';

@Component({
  selector: 'app-create-schedule-step-three',
  templateUrl: './create-schedule-step-three.component.html',
  styleUrls: ['./create-schedule-step-three.component.scss']
})
export class CreateScheduleStepThreeComponent {
  newSchedule: any;
  @Input() id: string;
  schedule$: Observable<any>;
  studyField: StudyFieldAPI;
  clockTime: string[] = ['7:30', '7:45', '8:00', '8:15', '8:30', '8:45', '9:00', '9:15', '9:30', '9:45',
    '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45',
    '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45',
    '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45', '18:00', '18:15', '18:30', '18:45',
    '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:15',
  ];
  weekDaysShort: string[] = ["Pn", "Wt", "Śr", "Cz", "Pt"];

  index: number = 0;

  constructor(
    private schedulesService: SchedulesService,
    private studyFieldService: StudyFieldService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.schedule$ = this.schedulesService.getSchedule(params['id']);
    });
    this.schedule$.subscribe(q => {
      this.studyFieldService.getStudyField(q.studyFieldId).subscribe(w => { this.studyField = w })
    });
  }
}
