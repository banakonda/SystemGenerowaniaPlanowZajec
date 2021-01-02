import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent {
  subjects: any[] = [];
  indexNumbers: number[][] = [];
  lastIndex: number = 0;;
  tabIndex: number = 0;
  @Input() set days(value: any) {
    if (!value.subjects) return;

    value.subjects.map((q: any) => {
      if (!this.subjects.length) {
        this.addSubject(q);
        this.indexNumbers.push([]);
      }
      else if (q.firstIndex === this.subjects[this.subjects.length - 1].firstIndex)
        this.subjects[this.subjects.length - 1].class.push(this.createClass(q));
      else {
        this.indexNumbers.push([]);
        for (let i = 0; i < q.firstIndex - this.lastIndex - 1; i++)
          this.indexNumbers[this.indexNumbers.length - 1].push(1);

        this.addSubject(q);
      }
      this.lastIndex = q.lastIndex;
    })

    console.log(this.subjects[0].class);
  }

  addSubject(q: any): void {
    this.subjects.push({
      classRoomName: q.classRoomName,
      firstIndex: q.firstIndex,
      lastIndex: q.lastIndex,
      class: [this.createClass(q)]
    });
  }

  createClass(q: any): any {
    return {
      subjectName: q.subjectName,
      subjectType: q.subjectType,
      teacherName: q.teacherName,
      teacherTitle: q.teacherTitle,
      classRoomName: q.classRoomName,
    }
  }
}
