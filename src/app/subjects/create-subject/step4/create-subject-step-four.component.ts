import { ChangeDetectorRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subject, SubjectTeachers } from 'src/app/data/models/Subject';
import { TeacherAPI } from 'src/app/data/models/Teacher';
import { TitleAPI } from 'src/app/data/models/Title';
import { TitleService } from 'src/app/data/title.service';
import { TeachersService } from 'src/app/teachers/teachers.service';
import { newSubjectTeacher } from '../default-subject';

@Component({
  selector: 'app-create-subject-step-four',
  templateUrl: './create-subject-step-four.component.html',
  styleUrls: ['./create-subject-step-four.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateSubjectStepFourComponent implements OnInit {
  @Input() newSubject: Subject;
  newSubjectTeacher = { ...newSubjectTeacher };
  teachers: TeacherAPI[];
  titles: TitleAPI[];
  sumOfGroup: {
    lectures: number,
    exercise: number,
    laboratories: number,
    seminars: number
  };
  constructor(
    private teachersService: TeachersService,
    private titleService: TitleService,
    private cdr: ChangeDetectorRef,
  ) {
    this.teachersService.getTeachers().subscribe(
      teachers => this.teachers = teachers,
      () => { },
      () => this.newSubjectTeacher.teacher = this.teachers[0]);
    this.titleService.getTitles().subscribe(t => this.titles = t);
  }

  ngOnInit(): void {
    this.countGroups();
  }

  private countGroups(): void {
    this.sumOfGroup = {
      lectures: 0,
      exercise: 0,
      laboratories: 0,
      seminars: 0,
    };
    this.newSubject.teachers.map(q => {
      this.sumOfGroup.lectures += q.lecturesEnable ? q.lecturesHours : 0;
      this.sumOfGroup.exercise += q.exerciseEnable ? q.exerciseHours : 0;
      this.sumOfGroup.laboratories += q.laboratoriesEnable ? q.laboratoriesHours : 0;
      this.sumOfGroup.seminars += q.seminarsEnable ? q.seminarsHours : 0;
    });
  }

  addTeacher(): void {
    if (this.newSubjectTeacher.teacher.id &&
      (this.newSubjectTeacher.lecturesEnable || this.newSubjectTeacher.exerciseEnable ||
        this.newSubjectTeacher.laboratoriesEnable || this.newSubjectTeacher.seminarsEnable)) {
      this.newSubject.teachers.push(this.newSubjectTeacher);

      this.newSubjectTeacher = { ...newSubjectTeacher };
      this.newSubjectTeacher.teacher = this.teachers[0];
    }
    this.countGroups();
  }
  getTitleToDisplay(item: TeacherAPI): string {
    return this.titles.find(q => q.id === item.titleID).name;
  }

  deleteTeacher(id: number): void {
    this.newSubject.teachers.splice(id, 1);
    this.countGroups();
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
