import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TitleAPI } from 'src/app/data/models/Title';
import { TitleService } from 'src/app/data/title.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent {
  subjects: any[] = [];
  indexNumbers: number[][] = [];
  lastIndex: number = 0;
  tabIndex: number = 0;

  @Input() selectedItem: any;
  @Output() selectedItemChange = new EventEmitter<any>();

  indexes = [0, 0];
  editMode = false;
  editThing = 0;
  @Output() editedForm = new EventEmitter<boolean>();

  titles: TitleAPI[] = [];

  editedItem: any;
  editItem: any;
  originalDays;

  editDesc = false;
  @Input() set days(value: any) {
    if (!value.subjects) return;
    this.originalDays = value;

    value.subjects.map((q: any) => {
      if (!this.subjects.length) {
        this.addSubject(q);
        this.indexNumbers.push([]);
        for (let i = 0; i < q.firstIndex - this.lastIndex - 1; i++)
          this.indexNumbers[this.indexNumbers.length - 1].push(1);
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
  }

  constructor(
    private titleService: TitleService,
  ) {
    this.titleService.getTitles().subscribe(
      t => this.titles = t,
      () => { },
      () => { },
    );
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
      group: q.group,
      description: q.description,
    }
  }

  editElement(i: number, k: number) {
    this.indexes = [i, k];
    this.editedItem = 0;
    for (let i = 0; i < this.indexes[0]; i++)
      this.editedItem += this.subjects[i].class.length;
    this.editedItem += this.indexes[1];

    this.selectedItem = this.subjects[i].class[k];
    this.editItem = this.originalDays.subjects[this.editedItem];
    this.selectedItemChange.emit(this.selectedItem);
  }

  deleteElement() {
    this.originalDays.subjects.splice(this.editedItem, 1);
    this.subjects[this.indexes[0]].class.splice(this.indexes[1], 1);
    this.selectedItem = {};
    this.selectedItemChange.emit(this.selectedItem);
    this.editedForm.emit(true);
  }

  saveChanges() {
    this.editThing = 0;
    this.editMode = false;
    this.selectedItem = {};
    this.selectedItemChange.emit(this.selectedItem);
    this.editedForm.emit(true);
  }
}
