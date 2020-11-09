import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';

import { Subject } from 'src/app/data/models/Subject';
import { StudyFieldService } from 'src/app/study-field/study-field.service';

@Component({
  selector: 'app-create-subject-step-two',
  templateUrl: './create-subject-step-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateSubjectStepTwoComponent implements OnInit {
  @Input() newSubject: Subject;
  studyFields: StudyFieldAPI[];

  get getSemesters(): number[] {
    if (!this.studyFields || !this.studyFields.length) {
      return [];
    }
    const numberOfSemesters = this.studyFields.find(q => q.id === this.newSubject.students.studyFieldID).numberOfSemesters;
    const semesters: number[] = [];

    for (let i = 0; i < numberOfSemesters; i++) {
      semesters.push(i + 1);
    }

    return semesters;
  }

  constructor(
    private studyFieldService: StudyFieldService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(fields => this.studyFields = fields,
      () => { },
      () => this.newSubject.students.studyFieldID = this.studyFields[0].id);
  }
}
