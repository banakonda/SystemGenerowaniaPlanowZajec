import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Schedule, ScheduleAPI } from '../data/models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  baseUrl = 'http://localhost:8888/schedule';
  requestOptions: Object = { responseType: 'text' };

  constructor(
    private httpClient: HttpClient,
  ) { }

  getSchedules(): Observable<ScheduleAPI[]> {
    return this.httpClient.get<ScheduleAPI[]>(this.baseUrl);
  }
  getSchedule(id: string): Observable<ScheduleAPI> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<ScheduleAPI>(url);
  }
  createSchedule(schedule: Schedule): Observable<Schedule> {
    return this.httpClient.post<Schedule>(this.baseUrl, schedule, this.requestOptions);
  }
  deleteSchedule(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
