import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Subject, SubjectAPI } from '../data/models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  baseUrl = 'http://localhost:8888/subject';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getSubjects(): Observable<SubjectAPI[]> {
    return this.httpClient.get<SubjectAPI[]>(this.baseUrl);
  }

  createSubjects(studyField: Subject): Observable<Subject> {
    console.log(studyField);
    return this.httpClient.post<Subject>(this.baseUrl, studyField, { responseType: 'text' } as Object);
  }
  editSubjects(studyField: SubjectAPI): void {

  }
  deleteSubjects(id: number): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url, { responseType: 'text' } as Object);
  }
}
