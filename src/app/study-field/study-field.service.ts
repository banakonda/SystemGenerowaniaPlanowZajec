import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudyField, StudyFieldAPI } from '../data/models/StudyField';

@Injectable({
  providedIn: 'root'
})
export class StudyFieldService {
  baseUrl = 'http://localhost:8888/fields';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getStudyFields(): Observable<StudyFieldAPI[]> {
    // return of(this.studyFields);
    const url = `${this.baseUrl}/get`;
    return this.httpClient.get<StudyFieldAPI[]>(url);
  }

  createStudyField(studyField: StudyField): Observable<any> {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text'
    };

    const url = `${this.baseUrl}/post`;
    return this.httpClient.post<StudyField>(url, studyField, requestOptions);
  }
  editStudyField(studyField: StudyFieldAPI): void {

  }
  deleteStudyField(id: number): Observable<{}> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }
}
