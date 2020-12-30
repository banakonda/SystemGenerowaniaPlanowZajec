import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyField, StudyFieldAPI } from '../data/models/StudyField';

@Injectable({ providedIn: 'root' })
export class StudyFieldService {
  private baseUrl: string = 'http://localhost:8888/fields';
  private requestOptions: Object = { responseType: 'text' };

  constructor(private httpClient: HttpClient) { }

  getStudyFields(): Observable<StudyFieldAPI[]> {
    return this.httpClient.get<StudyFieldAPI[]>(this.baseUrl);
  }
  getStudyField(id: string): Observable<StudyFieldAPI> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<StudyFieldAPI>(url);
  }
  createStudyField(studyField: StudyField): Observable<StudyField> {
    return this.httpClient.post<StudyField>(this.baseUrl, studyField, this.requestOptions);
  }
  editStudyField(studyField: StudyFieldAPI): Observable<StudyField> {
    const url = `${this.baseUrl}/${studyField.id}`;
    return this.httpClient.put<StudyFieldAPI>(url, studyField, this.requestOptions);
  }
  deleteStudyField(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
