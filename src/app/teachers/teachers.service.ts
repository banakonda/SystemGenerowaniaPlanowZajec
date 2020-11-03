import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Teacher, TeacherAPI } from '../data/models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  teachers: TeacherAPI[] = [{
    id: 1,
    titleID: 2,
    name: 'Jan Kowalski',
    studyField: 1,
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
    id: 2,
    titleID: 6,
    name: 'Anna Nowak',
    studyField: 1,
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
    id: 3,
    titleID: 8,
    name: 'Andrzej Lech',
    studyField: 1,
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
    id: 4,
    titleID: 11,
    name: 'Joanna Bańka',
    studyField: 2,
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

  getTeachers(): Observable<TeacherAPI[]> {
    return of(this.teachers);
  }

  createTeacher(teacher: Teacher): void {
    console.log(teacher);
  }
  editTeacher(teacher: TeacherAPI): void {

  }
  deleteTeacher(id: number): void {

  }

  constructor() { }
}
