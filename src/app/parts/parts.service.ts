import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment, AssignmentAPI } from '../data/models/Assignment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PartsService {
  baseUrl: string = 'http://localhost:8888/assignments';
  requestOptions: Object = { responseType: 'text' };

  constructor(private httpClient: HttpClient) { }

  getAssignments(): Observable<AssignmentAPI[]> {
    return this.httpClient.get<AssignmentAPI[]>(this.baseUrl);
  }
  getAssignment(id: string): Observable<AssignmentAPI> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<AssignmentAPI>(url);
  }
  createAssignment(teacher: Assignment): Observable<Assignment> {
    return this.httpClient.post<Assignment>(this.baseUrl, teacher, this.requestOptions);
  }
  editAssignment(teacher: AssignmentAPI): Observable<AssignmentAPI> {
    const url = `${this.baseUrl}/${teacher.id}`;
    return this.httpClient.put<AssignmentAPI>(url, teacher, this.requestOptions);
  }
  deleteAssignment(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
  async getAsyncAssignment() {
    return this.httpClient.get<AssignmentAPI[]>(this.baseUrl).toPromise();
  }
}