import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudyField, StudyFieldAPI } from '../data/models/StudyField';

@Injectable({
  providedIn: 'root'
})
export class StudyFieldService {
  studyFields: StudyFieldAPI[] = [{
    id: 1,
    name: 'Informatyka',
    degree: 1,
    numberOfSemesters: 7,
    departmentID: 1,
  }, {
    id: 2,
    name: 'Matematyka',
    degree: 1,
    numberOfSemesters: 6,
    departmentID: 1,
  }, {
    id: 3,
    name: 'Fizyka',
    degree: 1,
    numberOfSemesters: 6,
    departmentID: 1,
  }];
  constructor() { }

  getStudyFields(): Observable<StudyFieldAPI[]> {
    return of(this.studyFields);
  }

  createStudyField(studyField: StudyField): void {
    console.log(studyField);
  }
  editStudyField(studyField: StudyFieldAPI): void {

  }
  deleteStudyField(id: number): void {

  }
}
