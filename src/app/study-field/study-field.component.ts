import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from '../data/department.service';
import { DepartmentAPI } from '../data/models/Department';
import { StudyFieldAPI } from '../data/models/StudyField';
import { StudyFieldService } from './study-field.service';

@Component({
  selector: 'app-study-field',
  templateUrl: './study-field.component.html',
})
export class StudyFieldComponent implements OnInit {
  buttons: DepartmentAPI[] = [];
  selected: any;
  listItems$: Observable<StudyFieldAPI[]>;

  constructor(
    private studyFieldService: StudyFieldService,
    private departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(departments => this.buttons = departments);
    this.selected = this.buttons[0].id;
    this.refreshList();
  }

  deleteStudyField(id: number): void {
    this.studyFieldService.deleteStudyField(id).subscribe();
  }

  refreshList(): void {
    this.listItems$ = this.studyFieldService.getStudyFields();
  }
}
