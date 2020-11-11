import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClassRoom, ClassRoomAPI } from '../data/models/ClassRoom';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {
  classRooms: ClassRoomAPI[] = [{
    id: '1',
    name: 'D 1/15',
    studyFieldID: '1',
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
    id: '2',
    name: 'F 10',
    studyFieldID: '1',
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
    id: '3',
    name: '136',
    studyFieldID: '2',
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
  baseUrl = 'http://localhost:8888/classroom';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getClassRooms(): Observable<ClassRoomAPI[]> {
    // return of(this.classRooms);
    return this.httpClient.get<ClassRoomAPI[]>(`${this.baseUrl}/findAllClassRooms`);
  }

  createClassRooms(classRoom: any): Observable<ClassRoom> {
    const url = `${this.baseUrl}/addClassRoom`;
    return this.httpClient.post<ClassRoom>(url, classRoom, { responseType: 'text' } as Object);
  }
  editClassRooms(classRoom: any): void {

  }
  deleteClassRooms(id: number): Observable<{}> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
}
