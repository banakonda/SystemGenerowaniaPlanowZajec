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
  createAssignment(assignment: Assignment): Observable<Assignment> {
    console.log(assignment);
    return this.httpClient.post<Assignment>(this.baseUrl, assignment, this.requestOptions);
  }
  editAssignment(assignment: AssignmentAPI): Observable<AssignmentAPI> {
    const url = `${this.baseUrl}/${assignment.id}`;
    return this.httpClient.put<AssignmentAPI>(url, assignment, this.requestOptions);
  }
  deleteAssignment(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
  async getAsyncAssignment() {
    return this.httpClient.get<AssignmentAPI[]>(this.baseUrl).toPromise();
  
  }
}