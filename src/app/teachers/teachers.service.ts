import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher, TeacherAPI } from '../data/models/Teacher';
import { HttpClient } from '@angular/common/http';

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
  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(this.baseUrl, teacher, this.requestOptions);
  }
  editTeacher(teacher: TeacherAPI): Observable<TeacherAPI> {
    const url = `${this.baseUrl}/${teacher.id}`;
    return this.httpClient.put<TeacherAPI>(url, teacher, this.requestOptions);
  }
  deleteTeacher(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
}
