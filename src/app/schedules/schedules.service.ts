import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  baseUrl = 'http://localhost:8888/subject';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getSchedules(): Observable<any[]> {
    return of();
  }

  createSchedule(schedule: any): void {
    console.log(schedule);
    this.httpClient.post<any>(this.baseUrl, schedule, { responseType: 'text' } as Object);
  }
}
