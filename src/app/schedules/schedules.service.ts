import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  baseUrl = 'http://localhost:8888/schedule';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getSchedules(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  createSchedule(schedule: any): Observable<any> {
    // console.log(schedule);
    // console.log(JSON.stringify({schedule}));
    return this.httpClient.post<any>(this.baseUrl, schedule, { responseType: 'text' } as Object);
  }
  deleteSchedule(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
  getSchedule(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<any>(url);
  }


}
