import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleAPI } from '../data/models/Schedule';
import { StudyFieldAPI } from '../data/models/StudyField';
import { StudyFieldService } from '../study-field/study-field.service';
import { SchedulesService } from './schedules.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
})
export class SchedulesComponent {
  buttons: StudyFieldAPI[] = [];
  selected: string;
  listItems$: Observable<ScheduleAPI[]>;

  constructor(
    private schedulesService: SchedulesService,
    private studyFieldService: StudyFieldService,
  ) {
    this.refreshList();
  }

  deleteSchedule(id: string): void {
    this.schedulesService.deleteSchedule(id).subscribe(
      () => this.refreshList(),
    );
  }

  refreshList(): void {
    this.studyFieldService.getStudyFields().subscribe(
      q => this.buttons = q,
      () => { },
      () => this.selected = this.buttons[0].id);
    this.listItems$ = this.schedulesService.getSchedules();
  }

}
