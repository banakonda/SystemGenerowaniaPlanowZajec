import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher, TeacherAPI } from '../data/models/Teacher';
import { HttpClient } from '@angular/common/http';
import { newSubjectTeacher, SubjectTeacher } from '../parts/create-parts/default-subject';

@Injectable({ providedIn: 'root' })
export class TeachersService {
  baseUrl: string = 'http://localhost:8888/teachers';
  requestOptions: Object = { responseType: 'text' };

  constructor(private httpClient: HttpClient) { }

  getTeachers(): Observable<TeacherAPI[]> {
    return this.httpClient.get<TeacherAPI[]>(this.baseUrl);
  }
  getTeacher(id: string): Observable<TeacherAPI> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<TeacherAPI>(url);
  }
  addHoursToTeacher(newSubjectTeacher: SubjectTeacher): Observable<SubjectTeacher> {
    const url = `${this.baseUrl}/addHours`;
    return this.httpClient.post<SubjectTeacher>(url, newSubjectTeacher, this.requestOptions);
  }

  removeHoursFromTeacher(newSubjectTeacher: SubjectTeacher): Observable<SubjectTeacher> {
    const url = `${this.baseUrl}/removeHours`;
    return this.httpClient.post<SubjectTeacher>(url, newSubjectTeacher, this.requestOptions);
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(this.baseUrl, teacher, this.requestOptions);
  }
  editTeacher(teacher: TeacherAPI): Observable<TeacherAPI> {
    const url = `${this.baseUrl}/${teacher.id}`;
    console.log(teacher);
    return this.httpClient.put<TeacherAPI>(url, teacher, this.requestOptions);
  }
  deleteTeacher(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
  async getAsyncTeachers() {
    return this.httpClient.get<TeacherAPI[]>(this.baseUrl).toPromise();
  }
}
