import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
})
export class CreateScheduleComponent implements OnInit {
  step = 3;
  lastStep = 3;
  newSchedule = {
    studyFieldID: 1,
    semester: 1,
    numberOfSemesters: 1,
  };
  newScheduleId: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  createSchedule(): void { }
  handleNewScheduleId(value: string) {
    this.newScheduleId = value;
    this.step = 3
  }
}
