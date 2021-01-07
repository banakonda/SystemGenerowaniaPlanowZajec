import { Component } from '@angular/core';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
})
export class CreateScheduleComponent {
  step = 1;
  lastStep = 2;
  newSchedule = {
    name: "Nowy plan zajęć",
    studyFieldID: 1,
    semester: 1,
    numberOfSemesters: 1,
    lessonWidth: 2,
  };
  newScheduleId: string = "";

  handleNewScheduleId(value: string) {
    this.newScheduleId = value;
    this.step = 3
  }
}
