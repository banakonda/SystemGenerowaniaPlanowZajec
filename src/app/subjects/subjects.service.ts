import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Subject, SubjectAPI } from '../data/models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  subjects: SubjectAPI[] = [{
    id: 1,
    name: 'Metody Obliczeniowe',
    students: {
      studyFieldID: 1,
      semester: 1,
    },
    schedule: {
      lectures: {
        enabled: true,
        hours: 30,
      },
      exercise: {
        enabled: false,
      },
      laboratories: {
        enabled: true,
        hours: 30,
      },
      seminars: {
        enabled: false,
      },
    },
    teachers: [{
      teacher: {
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
      },
      lecturesEnable: false,
      exerciseEnable: true,
      laboratoriesEnable: false,
      seminarsEnable: false,
    }, {
      teacher: {
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
      },
      lecturesEnable: true,
      exerciseEnable: true,
      laboratoriesEnable: true,
      seminarsEnable: false,
    }],
    eligibility: true,
  }, {
    id: 2,
    name: 'Wstęp do programowania',
    students: {
      studyFieldID: 1,
      semester: 2,
    },
    schedule: {
      lectures: {
        enabled: true,
        hours: 30,
      },
      exercise: {
        enabled: true,
        hours: 15
      },
      laboratories: {
        enabled: true,
        hours: 15,
      },
      seminars: {
        enabled: false,
      },
    },
    teachers: [{
      teacher: {
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
      },
      lecturesEnable: true,
      exerciseEnable: false,
      laboratoriesEnable: false,
      seminarsEnable: false,
    }, {
      teacher: {
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
      },
      lecturesEnable: false,
      exerciseEnable: true,
      laboratoriesEnable: true,
      seminarsEnable: false,
    }],
    eligibility: false,
  }];

  constructor() { }

  getSubjects(): Observable<SubjectAPI[]> {
    return of(this.subjects);
  }

  createSubjects(studyField: Subject): void {
    console.log(studyField);
  }
  editSubjects(studyField: SubjectAPI): void {

  }
  deleteSubjects(id: number): void {

  }
}
