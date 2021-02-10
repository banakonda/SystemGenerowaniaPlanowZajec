import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Subject, SubjectAPI } from '../data/models/Subject';

@Injectable({ providedIn: 'root' })
export class SubjectsService {
  baseUrl = 'http://localhost:8888/subject';
  requestOptions: Object = { responseType: 'text' };

  constructor(private httpClient: HttpClient) { }

  getSubjects(): Observable<SubjectAPI[]> {
    return this.httpClient.get<SubjectAPI[]>(this.baseUrl);
  }
  getSubject(id: string): Observable<SubjectAPI> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<SubjectAPI>(url);
  }
  createSubjects(studyField: Subject): Observable<Subject> {
    return this.httpClient.post<Subject>(this.baseUrl, studyField, this.requestOptions);
  }
  editSubjects(studyField: SubjectAPI): Observable<SubjectAPI> {
    const url = `${this.baseUrl}/${studyField.id}`;
    return this.httpClient.put<SubjectAPI>(url, studyField, this.requestOptions);
  }
  deleteSubjects(id: number): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }

  postAssignments(id: any): Observable<any> {
    console.log("Tu gites")
    const url = `${this.baseUrl}/assign`;
    return this.httpClient.post<any>(url, id, this.requestOptions);
  }

  async getAsyncSubjects() {
    return this.httpClient.get<SubjectAPI[]>(this.baseUrl).toPromise();
  }
}
