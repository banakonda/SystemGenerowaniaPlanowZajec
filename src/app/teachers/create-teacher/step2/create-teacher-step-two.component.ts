import { Component, Input, OnInit } from '@angular/core';
import { Availability } from 'src/app/data/models/Availability';
import { Teacher } from 'src/app/data/models/Teacher';
import { getWeekAvailability } from '../default-teacher';

@Component({
  selector: 'app-create-teacher-step-two',
  templateUrl: './create-teacher-step-two.component.html',
})
export class CreateTeacherStepTwoComponent {
  @Input() newTeacher: Teacher;
  week: 'even' | 'odd' = 'even';

  get teacherAvailability(): Availability {
    if (this.newTeacher.availability.oneWeek) {
      return this.newTeacher.availability.allWeeks;
    }
    if (this.newTeacher.availability.oneWeek === false) {
      if (this.newTeacher.availability.evenWeeks === undefined || this.newTeacher.availability.oddWeeks === undefined) {
        this.newTeacher.availability.evenWeeks = getWeekAvailability();
        this.newTeacher.availability.oddWeeks = getWeekAvailability();
      }
      if (this.week === 'even') { return this.newTeacher.availability.evenWeeks; }
      if (this.week === 'odd') { return this.newTeacher.availability.oddWeeks; }
    }
  }

  set teacherAvailability(value: Availability) {
    if (this.newTeacher.availability.oneWeek) {
      this.newTeacher.availability.allWeeks = value;
    }
    if (this.newTeacher.availability.oneWeek === false) {
      if (this.week === 'even') { this.newTeacher.availability.evenWeeks = value; }
      if (this.week === 'odd') { this.newTeacher.availability.oddWeeks = value; }
    }
  }
}
