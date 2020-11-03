import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClassRoomAPI } from '../data/models/ClassRoom';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {
  classRooms: ClassRoomAPI[] = [{
    id: 1,
    name: 'D 1/15',
    studyFieldID: 1,
    availability: {
      oneWeek: true,
      allWeeks: {
        monday: [true],
        tuesday: [true],
        wednesday: [true],
        thursday: [true],
        friday: [true],
      }
    },
  }, {
    id: 2,
    name: 'F 10',
    studyFieldID: 1,
    availability: {
      oneWeek: true,
      allWeeks: {
        monday: [true],
        tuesday: [true],
        wednesday: [true],
        thursday: [true],
        friday: [true],
      }
    },
  }, {
    id: 3,
    name: '136',
    studyFieldID: 2,
    availability: {
      oneWeek: true,
      allWeeks: {
        monday: [true],
        tuesday: [true],
        wednesday: [true],
        thursday: [true],
        friday: [true],
      }
    },
  }];
  constructor() { }

  getClassRooms(): Observable<any> {
    return of(this.classRooms);
  }

  createClassRooms(classRooms: any): void {
    console.log(classRooms);
  }
  editClassRooms(classRooms: any): void {

  }
  deleteClassRooms(classRooms: number): void {

  }
}
