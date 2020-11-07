import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  subjects: any[] = [{

  }];

  constructor() { }

  getSchedules(): Observable<any[]> {
    return of(this.subjects);
  }

  createSchedule(studyField: any): void {
    console.log(studyField);
  }
  editSchedule(studyField: any): void {

  }
  deleteSchedule(id: number): void {

  }
}
