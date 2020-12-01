import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher, TeacherAPI } from '../data/models/Teacher';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  baseUrl = 'http://localhost:8888/teachers';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTeachers(): Observable<TeacherAPI[]> {
    return this.httpClient.get<TeacherAPI[]>(this.baseUrl);
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    console.log(teacher);
    return this.httpClient.post<Teacher>(this.baseUrl, teacher, { responseType: 'text' } as Object);
  }
  editTeacher(teacher: TeacherAPI): void {

  }
  deleteTeacher(id: number): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url, { responseType: 'text' } as Object);
  }

}
