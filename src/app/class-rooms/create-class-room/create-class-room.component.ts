import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClassRoomAPI } from 'src/app/data/models/ClassRoom';
import { ClassRoomService } from '../class-rooms.service';
import { newClassRoom } from './default-class-rooms';

@Component({
  selector: 'app-create-class-room',
  templateUrl: './create-class-room.component.html',
})
export class CreateClassRoomComponent {
  step = 1;
  lastStep = 2;
  edit = false;

  newClassRoom = newClassRoom();
  @Input() set classRoom(value: ClassRoomAPI) {
    this.newClassRoom = value;
    this.edit = true;
  }

  constructor(
    private classRoomsService: ClassRoomService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  createClassRoom(): void {
    let error = 0;
    try {
      if (!this.edit)
        this.classRoomsService.createClassRooms(this.newClassRoom).subscribe(q => { this.snackBar(q); });
      else
        this.classRoomsService.editClassRooms(this.newClassRoom as ClassRoomAPI).subscribe(q => { this.snackBar(q); });
    } catch {
      error = 1;
    } finally {
    }
  }

  snackBar(q: any) {
    this._snackBar.open(q, undefined, {
      duration: 3000,
    });
    this.router.navigate(['/class-rooms']);
  }
}
