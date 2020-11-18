import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Subject, SubjectAPI } from '../data/models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  subjects: SubjectAPI[] = [{
    id: '1',
    name: 'Metody Obliczeniowe',
    students: {
      studyFieldID: '1',
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
      },
      lecturesEnable: false,
      exerciseEnable: true,
      laboratoriesEnable: false,
      seminarsEnable: false,
    }, {
      teacher: {
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
      },
      lecturesEnable: true,
      exerciseEnable: true,
      laboratoriesEnable: true,
      seminarsEnable: false,
    }],
    eligibility: true,
  }, {
    id: '2',
    name: 'Wstęp do programowania',
    students: {
      studyFieldID: '1',
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
      },
      lecturesEnable: true,
      exerciseEnable: false,
      laboratoriesEnable: false,
      seminarsEnable: false,
    }, {
      teacher: {
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
      },
      lecturesEnable: false,
      exerciseEnable: true,
      laboratoriesEnable: true,
      seminarsEnable: false,
    }],
    eligibility: false,
  }];

  baseUrl = 'http://localhost:8888/subject';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getSubjects(): Observable<SubjectAPI[]> {
    // return of(this.subjects);
    const url = `${this.baseUrl}/get`;
    return this.httpClient.get<SubjectAPI[]>(url);
  }

  createSubjects(studyField: Subject): Observable<Subject> {
    console.log(studyField);
    const url = `${this.baseUrl}/post`;
    return this.httpClient.post<Subject>(url, studyField, { responseType: 'text' } as Object);
  }
  editSubjects(studyField: SubjectAPI): void {

  }
  deleteSubjects(id: number): Observable<{}> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.httpClient.delete(url, { responseType: 'text' } as Object);
  }
}
