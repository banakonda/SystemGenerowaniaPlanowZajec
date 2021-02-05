import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ScheduleActivities } from 'src/app/data/models/Subject';

@Component({
  selector: 'app-create-subject-type',
  templateUrl: './create-subject-type.component.html',
  styleUrls: ['./create-subject-type.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateSubjectTypeComponent {
  type: ScheduleActivities;
  class: string = "";
  hours: number = 0;
  @Input() set sType(value: ScheduleActivities) {
    this.type = value;
    this.hours = value.hours;
    this.class = value.classroom.join(", ");
  }
  @Input() typeName: string = "";
  @Input() name: string;

  changeModel(value: string) {
    if (this.type.enabled && value)
      this.type.classroom = value.replace(' ', '').split(',');
  }
}
