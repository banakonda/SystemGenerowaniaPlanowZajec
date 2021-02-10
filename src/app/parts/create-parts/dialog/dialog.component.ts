import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Assignment, TeacherAssignments } from 'src/app/data/models/Assignment';
import { SubjectAPI, Subject} from '../../../data/models/Subject';
import { SubjectsService } from '../../../subjects/subjects.service';
import { TeachersService } from '../../../teachers/teachers.service';
import { newSubject, newSubjectTeacher } from '../default-subject';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() newPart: Assignment;
  newSubject: Subject = newSubject();
  newSubjectTeacher = { ...newSubjectTeacher };
  subjects: SubjectAPI[];
  lectGroups: number[];
  labGroups: number[];
  excerGroups: number[];
  semGroups: number[];
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subjectsService: SubjectsService,
    private teachersService: TeachersService, 
    private cdr: ChangeDetectorRef,
  ) { 
    this.subjectsService.getSubjects().subscribe(
      subjects => {
        this.subjects = subjects;
        this.newSubject = this.subjects[0];
      },
      () => { });

      setTimeout( () => console.log(this.subjects), 100 
      )
      
  }

  addSubject() {
    this.newSubjectTeacher.teacherId = this.data.id;
    this.newSubjectTeacher.subjectName = this.newSubject.name;
    this.newSubjectTeacher.lecturesHours = +this.data.groups[0][this.newSubject.students.semester-1][0];
    this.newSubjectTeacher.laboratoriesHours = +this.data.groups[0][this.newSubject.students.semester-1][1];
    this.newSubjectTeacher.exerciseHours = +(this.data.groups[0][this.newSubject.students.semester-1][1] / 2).toFixed();
    this.newSubjectTeacher.seminarsHours = +(this.data.groups[0][this.newSubject.students.semester-1][1] / 2).toFixed();

    this.lectGroups = Array.from({length: this.newSubjectTeacher.lecturesHours}, (_, i) => i + 1);
    console.log(this.lectGroups);
    this.labGroups = Array.from({length: this.newSubjectTeacher.laboratoriesHours}, (_, i) => i + 1);
    console.log(this.labGroups);
    this.excerGroups = Array.from({length: this.newSubjectTeacher.exerciseHours}, (_, i) => i + 1);
    console.log(this.excerGroups);
    this.semGroups = Array.from({length: this.newSubjectTeacher.seminarsHours}, (_, i) => i + 1);
    console.log(this.semGroups);
    
  }

  addToTeacher() {

    console.log(this.newSubjectTeacher);
    var assignment: TeacherAssignments = {
      teacherId: "",
      subjectName: "",
      lecturesGroups: 0,
      exerciseGroups: 0,
      laboratoriesGroups: 0,
      seminarsGroups: 0,
    };

    assignment.teacherId = this.newSubjectTeacher.teacherId;
    assignment.subjectName = this.newSubjectTeacher.subjectName;

    if(this.newSubjectTeacher.lecturesEnable) {
      assignment.lecturesGroups = this.newSubjectTeacher.lecturesHours;
    }
    if(this.newSubjectTeacher.exerciseEnable) {
      assignment.exerciseGroups = this.newSubjectTeacher.exerciseHours;
    }
    if(this.newSubjectTeacher.laboratoriesEnable) {
      assignment.laboratoriesGroups = this.newSubjectTeacher.laboratoriesHours;
    }  
    if(this.newSubjectTeacher.seminarsEnable) {
      assignment.seminarsGroups = this.newSubjectTeacher.seminarsHours;
    }
    this.teachersService.addHoursToTeacher(this.newSubjectTeacher).subscribe();

    


    this.dialogRef.close({assignment: assignment});

  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
