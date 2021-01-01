import { Component, Input, } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ClassRoom } from 'src/app/data/models/ClassRoom';

@Component({
  selector: 'app-create-class-room-step-one',
  templateUrl: './create-class-room-step-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateClassRoomStepOneComponent {
  @Input() newClassRoom: ClassRoom;
}
