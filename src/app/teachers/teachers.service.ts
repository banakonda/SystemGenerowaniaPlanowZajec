import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher, TeacherAPI } from '../data/models/Teacher';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  teachers: TeacherAPI[] = [{
    id: '1',
    titleID: '2',
    name: 'Jan Kowalski',
    studyField: '1',
    availability: {
      oneWeek: true,
      allWeeks: {
        monday: [true],
        tuesday: [true],
        wednesday: [true],
        thursday: [true],
        friday: [true],
      }
    },
  }, {
    id: '2',
    titleID: '6',
    name: 'Anna Nowak',
    studyField: '1',
    availability: {
      oneWeek: true,
      allWeeks: {
        monday: [true],
        tuesday: [true],
        wednesday: [true],
        thursday: [true],
        friday: [true],
      }
    },
  }, {
    id: '3',
    titleID: '8',
    name: 'Andrzej Lech',
    studyField: '1',
    availability: {
      oneWeek: true,
      allWeeks: {
        monday: [true],
        tuesday: [true],
        wednesday: [true],
        thursday: [true],
        friday: [true],
      }
    },
  }, {
    id: '4',
    titleID: '11',
    name: 'Joanna Bańka',
    studyField: '2',
    availability: {
      oneWeek: true,
      allWeeks: {
        monday: [true],
        tuesday: [true],
        wednesday: [true],
        thursday: [true],
        friday: [true],
      }
    },
  }];

  baseUrl = 'http://localhost:8888/teachers';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTeachers(): Observable<TeacherAPI[]> {
    // return of(this.teachers);
    return this.httpClient.get<TeacherAPI[]>(`${this.baseUrl}/findAllTeachers`);
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    const url = `${this.baseUrl}/addTeacher`;
    return this.httpClient.post<Teacher>(url, teacher);
  }
  editTeacher(teacher: TeacherAPI): void {

  }
  deleteTeacher(id: number): Observable<{}> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }

}
