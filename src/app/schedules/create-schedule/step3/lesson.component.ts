import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent {
  subjects: any[] = [];
  indexNumbers: number[] = [];

  @Input() set days(value: any) {
    if (!value.subjects) return;

    value.subjects.map((q: any) => {
      if (!this.subjects.length)
        this.addSubject(q);
      else if (q.firstIndex === this.subjects[this.subjects.length - 1].firstIndex)
        this.subjects[this.subjects.length - 1].class.push(this.createClass(q));
      else
        this.addSubject(q);
    })
    console.log(this.subjects)
  }

  addSubject(q: any) {
    this.subjects.push({
      classRoomName: q.classRoomName,
      firstIndex: q.firstIndex,
      lastIndex: q.lastIndex,
      class: [this.createClass(q)]
    });
    this.indexNumbers.push(q.firstIndex);
  }

  createClass(q: any): any {
    return {
      subjectName: q.subjectName,
      subjectType: q.subjectType,
      teacherName: q.teacherName,
      teacherTitle: q.teacherTitle,
    }
  }
}
