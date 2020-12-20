import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
})
export class CreateScheduleComponent implements OnInit {
  step = 1;
  lastStep = 2;
  newSchedule = {
    studyFieldID: 1,
    semester: 1,
    numberOfSemesters: 1,
  };
  constructor() { }

  ngOnInit(): void {
  }

  createSchedule(): void { }

}
