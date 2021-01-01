import { Component, Input } from '@angular/core';
import { Availability } from 'src/app/data/models/Availability';
import { ClassRoom } from 'src/app/data/models/ClassRoom';
import { getWeekAvailability } from '../default-class-rooms';

@Component({
  selector: 'app-create-class-room-step-two',
  templateUrl: './create-class-room-step-two.component.html',
})
export class CreateClassRoomStepTwoComponent {
  @Input() newClassRoom: ClassRoom;
  week: 'even' | 'odd' = 'even';

  get classRoomAvailability(): Availability {
    if (this.newClassRoom.availability.oneWeek) {
      return this.newClassRoom.availability.allWeeks;
    }
    if (this.newClassRoom.availability.oneWeek === false) {
      if (this.newClassRoom.availability.evenWeeks === undefined || this.newClassRoom.availability.oddWeeks === undefined) {
        this.newClassRoom.availability.evenWeeks = getWeekAvailability();
        this.newClassRoom.availability.oddWeeks = getWeekAvailability();
      }
      if (this.week === 'even') { return this.newClassRoom.availability.evenWeeks; }
      if (this.week === 'odd') { return this.newClassRoom.availability.oddWeeks; }
    }
  }

  set classRoomAvailability(value: Availability) {
    if (this.newClassRoom.availability.oneWeek) {
      this.newClassRoom.availability.allWeeks = value;
    }
    if (this.newClassRoom.availability.oneWeek === false) {
      if (this.week === 'even') { this.newClassRoom.availability.evenWeeks = value; }
      if (this.week === 'odd') { this.newClassRoom.availability.oddWeeks = value; }
    }
  }
}
