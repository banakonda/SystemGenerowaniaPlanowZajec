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
  @Input() type: ScheduleActivities;
  @Input() typeName: string = "";
  @Input() name: string;
  class: string = "";

  // get checkbox(): boolean {
  //   if (this.type)
  //     return this.type.enabled;
  //   else
  // }

  // set checkbox(value: boolean) {
  //   if (value)
  //     this.type.enabled = value;
  // }

  changeModel(value: string) {
    if (this.type.enabled && value)
      this.type.classroom = value.replace(' ', '').split(',');
  }
}
