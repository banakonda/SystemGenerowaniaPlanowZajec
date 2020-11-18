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
    studyFieldId: '1',
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
    studyFieldId: '1',
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
    studyFieldId: '1',
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
    studyFieldId: '2',
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
    const url = `${this.baseUrl}/get`;
    return this.httpClient.get<TeacherAPI[]>(url);
  }

  createTeacher(teacher: Teacher): Observable<Teacher> {
    console.log(teacher);
    const url = `${this.baseUrl}/post`;
    return this.httpClient.post<Teacher>(url, teacher, { responseType: 'text' } as Object);
  }
  editTeacher(teacher: TeacherAPI): void {

  }
  deleteTeacher(id: number): Observable<{}> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.httpClient.delete(url, { responseType: 'text' } as Object);
  }

}
