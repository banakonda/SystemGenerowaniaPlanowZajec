import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudyField, StudyFieldAPI } from '../data/models/StudyField';

@Injectable({
  providedIn: 'root'
})
export class StudyFieldService {
  studyFields: StudyFieldAPI[] = [{
    id: '1',
    name: 'Informatyka',
    degree: 1,
    numberOfSemesters: 7,
    departmentID: '1',
  }, {
    id: '2',
    name: 'Matematyka',
    degree: 1,
    numberOfSemesters: 6,
    departmentID: '1',
  }, {
    id: '3',
    name: 'Fizyka',
    degree: 1,
    numberOfSemesters: 6,
    departmentID: '1',
  }];

  baseUrl = 'http://localhost:8888/fields';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getStudyFields(): Observable<StudyFieldAPI[]> {
    // return of(this.studyFields);
    return this.httpClient.get<StudyFieldAPI[]>(`${this.baseUrl}/findAllStudyFields`);
  }

  createStudyField(studyField: StudyField): Observable<any> {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    };

    const url = `${this.baseUrl}/addStudyField`;
    return this.httpClient.post<StudyField>(url, studyField, requestOptions);
  }
  editStudyField(studyField: StudyFieldAPI): void {

  }
  deleteStudyField(id: number): Observable<{}> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
}
