import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClassRoom } from 'src/app/data/models/ClassRoom';
import { ClassRoomService } from '../class-rooms.service';
import { newClassRoom } from './default-class-rooms';

@Component({
  selector: 'app-create-class-room',
  templateUrl: './create-class-room.component.html',
})
export class CreateClassRoomComponent {
  step = 1;
  lastStep = 2;
  constructor(
    private classRoomsService: ClassRoomService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  newClassRoom: ClassRoom = newClassRoom();

  createClassRoom(): void {
    let error = 0;
    try {
      this.classRoomsService.createClassRooms(this.newClassRoom).subscribe();
    } catch {
      error = 1;
    } finally {
      if (!error) {
        this._snackBar.open('Pomyślnie utworzono salę ' + this.newClassRoom.name, undefined, {
          duration: 3000,
        });
        this.router.navigate(['/class-rooms']);
      }
    }
  }

}
