import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ClassRoom } from 'src/app/data/models/ClassRoom';
import { StudyField, StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';

@Component({
  selector: 'app-create-class-room-step-one',
  templateUrl: './create-class-room-step-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateClassRoomStepOneComponent implements OnInit {
  @Input() newClassRoom: ClassRoom;
  studyFields: StudyFieldAPI[] = [];
  constructor(
    private studyFieldService: StudyFieldService,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(q => this.studyFields = q,
      () => { },
      () => this.newClassRoom.studyFieldID = this.studyFields[0].id);
  }
}
