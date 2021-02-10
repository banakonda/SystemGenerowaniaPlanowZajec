import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TeacherAPI } from '../../../data/models/Teacher';
import { StudyFieldAPI } from '../../../data/models/StudyField';
import { StudyFieldService } from '../../../study-field/study-field.service';
import { TeachersService } from '../../../teachers/teachers.service';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { Assignment, TeacherAssignments } from 'src/app/data/models/Assignment';
import { NumberValueAccessor } from '@angular/forms';
import { SubjectAPI, Subject} from '../../../data/models/Subject';
import { SubjectsService } from '../../../subjects/subjects.service';

@Component({
  selector: 'app-create-parts-step-three',
  templateUrl: './create-parts-step-three.component.html',
  styleUrls: ['./create-parts-step-three.component.scss']
})
export class CreatePartsStepThreeComponent implements OnInit {

  @Input() newPart: Assignment;

  buttons: StudyFieldAPI[] = [];
  selected: string;
  listItems$: Observable<TeacherAPI[]>;
  assignment: TeacherAssignments;
  subjects: SubjectAPI[] = [];
  groupOfSemesters: number[] = [];

  constructor(
    private teachersService: TeachersService,
    private studyFieldService: StudyFieldService,
    public matDialog: MatDialog,
    private subjectsService: SubjectsService,
  ) { 
    this.refreshList();
  }

  refreshList(): void {
    this.studyFieldService.getStudyFields().subscribe(
      q => this.buttons = q,
      () => { },
      () => this.selected = this.buttons[0].id);
    this.listItems$ = this.teachersService.getTeachers();
  }

  ngOnInit(): void {
    this.subjectsService.getSubjects().subscribe(
      subjects => {
        this.subjects = subjects;
      },
      () => { });
    console.log(this.newPart.name);
  }

  openDialog(id: string, name: string) {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DialogComponent, {
      data: {
        id: id,
        name: name,
        groups: this.newPart.groups,
      }
    });

    dialogRef.afterClosed().subscribe(response => {

      let update = false;

      this.newPart.assignments.forEach(element => {
        if (element.teacherId === response.assignment.teacherId) {
          if (element.subjectName === response.assignment.subjectName) {
            if(response.assignment.lecturesGroups > 0) {
              element.lecturesGroups += response.assignment.lecturesGroups
            }
            if(response.assignment.exerciseGroups > 0) {
              element.exerciseGroups += response.assignment.exerciseGroups
            }
            if(response.assignment.laboratoriesGroups > 0) {
              element.laboratoriesGroups += response.assignment.laboratoriesGroups
            }
            if(response.assignment.seminarsGroups > 0) {
              element.seminarsGroups += response.assignment.seminarsGroups
            }

            let index = this.newPart.assignments.indexOf(element);
            this.newPart.assignments[index] = element;
            update = true;
          }
        }
      });
      
      if(!update) {
        this.newPart.assignments.push(
          response.assignment
        );
        this.subjects.forEach(element => {
          if(element.name === this.newPart.assignments[this.newPart.assignments.length-1].subjectName) {
            this.groupOfSemesters.push(element.students.semester);
          }
        });
      }

      
      
      this.refreshList();
    });

  }

  openDialogInfo(id: string, name: string) {
    const dialogConfig = new MatDialogConfig();
    let dialogRef = this.matDialog.open(DialogInfoComponent, {
      data: {
        id: id,
        name: name,
        assignments: this.newPart.assignments,
        groups: this.newPart.groups,
        semesters: this.groupOfSemesters,
      }
    });

    dialogRef.afterClosed().subscribe(response => {
      
      this.newPart.assignments = response.assignment;

      console.log(this.newPart.assignments);
      
      this.refreshList();
    });

  }


}
