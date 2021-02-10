import { Component, OnInit, Inject, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Assignment, TeacherAssignments } from 'src/app/data/models/Assignment';
import { newSubjectTeacher } from '../default-subject';
import { TeachersService } from '../../../teachers/teachers.service';


@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss']
})
export class DialogInfoComponent implements OnInit {

  @Input() newPart: Assignment;
  assignments: TeacherAssignments[];
  newSubjectTeacher = { ...newSubjectTeacher };
  

  constructor(
    public dialogRef: MatDialogRef<DialogInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
    private teachersService: TeachersService,
    
  ) { 
  
  }

  ngOnInit(): void {
    this.assignments = this.data.assignments;
    console.log("grupy" + this.data.groups)
    console.log("semestry" + this.data.semesters)
  }

  deleteSubject(i: number) {
    
    this.newSubjectTeacher.teacherId = this.assignments[i].teacherId;
    this.newSubjectTeacher.subjectName = this.assignments[i].subjectName;

    if(this.assignments[i].lecturesGroups > 0) {
      this.newSubjectTeacher.lecturesEnable = true;
      this.newSubjectTeacher.lecturesHours = this.assignments[i].lecturesGroups;
    }

    if(this.assignments[i].exerciseGroups > 0) {
      this.newSubjectTeacher.exerciseEnable = true;
      this.newSubjectTeacher.exerciseHours = this.assignments[i].exerciseGroups;
    }

    if(this.assignments[i].laboratoriesGroups > 0) {
      this.newSubjectTeacher.laboratoriesEnable = true;
      this.newSubjectTeacher.laboratoriesHours = this.assignments[i].laboratoriesGroups;
    }

    if(this.assignments[i].seminarsGroups > 0) {
      this.newSubjectTeacher.seminarsEnable = true;
      this.newSubjectTeacher.seminarsHours = this.assignments[i].seminarsGroups;
    }

    this.teachersService.removeHoursFromTeacher(this.newSubjectTeacher).subscribe();

    this.assignments.splice(i, 1);
    console.log(this.assignments);
    this.dialogRef.close({assignment: this.assignments});
  }

}
