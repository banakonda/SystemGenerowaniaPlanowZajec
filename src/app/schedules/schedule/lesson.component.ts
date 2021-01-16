import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassRoomService } from 'src/app/class-rooms/class-rooms.service';
import { TitleAPI } from 'src/app/data/models/Title';
import { TitleService } from 'src/app/data/title.service';
import { SubjectsService } from 'src/app/subjects/subjects.service';
import { TeachersService } from 'src/app/teachers/teachers.service';
import { SchedulesService } from '../schedules.service';

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

  @Input() schedule: any;
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

  errorMessage = "";
  @Input() weekDay: number;
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

  lastTeacherEditedName = "";
  lastSubjectEditedName = "";
  lastClassRoomEditedName = "";

  constructor(
    private titleService: TitleService,
    private classRoomService: ClassRoomService,
    private teachersService: TeachersService,
    private subjectsService: SubjectsService,
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

  async saveChanges() {

    this.errorMessage = "";
    switch (this.editThing) { // Nazwa DONE
      case 1:
        let pp = [];
        await this.subjectsService.getAsyncSubjects().then(q => pp = q.map(w => w.name));
        if (pp.indexOf(this.selectedItem.subjectName) === -1)
          if (this.lastSubjectEditedName !== this.selectedItem.subjectName)
            this.errorMessage = "Przedmiot nie istnieje";

        this.lastSubjectEditedName = this.selectedItem.subjectName;

        if (this.errorMessage.length === 0)
          this.editItem.subjectName = this.selectedItem.subjectName;
        break;

      case 2: // classroom DONE
        this.schedule.semesters.map(semester => {
          const t = semester.daysOfWeek[this.weekDay].subjects?.filter(q => q.firstIndex >= this.subjects[this.indexes[0]].firstIndex && q.firstIndex <= this.subjects[this.indexes[0]].lastIndex);
          if (t && t.length) {
            let i = 0;
            t.map(q => {
              i++;
              if (q.classRoomName === this.selectedItem.classRoomName)
                if (this.editItem.classRoomName !== this.selectedItem.classRoomName)
                  this.errorMessage = `Sala zajęta (inna grupa).`
            })
          }
        })

        let p = [];
        await this.classRoomService.getAsyncClassRooms().then(q => p = q);
        const availability = p?.filter(q => q.name === this.selectedItem.classRoomName)[0];
        if (availability) {
          if (availability.availability) {
            if (availability.availability.oneWeek) {
              const days = Object.values(availability.availability.allWeeks);
              if (!days[this.weekDay][this.subjects[this.indexes[0]].firstIndex])
                this.errorMessage = "Sala zajęta (dostępność)."
            }
          }
        }
        else if (this.selectedItem.classRoomName != "online")
          if (this.lastClassRoomEditedName !== this.selectedItem.classRoomName)
            this.errorMessage = "Sala nie istnieje."

        this.lastClassRoomEditedName = this.selectedItem.classRoomName;

        if (this.errorMessage.length === 0)
          this.editItem.classRoomName = this.selectedItem.classRoomName;
        break;

      case 3: // group DONE
        const subjectsClass = this.subjects[this.indexes[0]].class;
        if (this.indexes[1] || subjectsClass.length > 1) {
          if ((subjectsClass[0].subjectType === "Exercise" || subjectsClass[0].subjectType === "Seminars") && subjectsClass[1].subjectType === "Laboratories")
            if (+subjectsClass[0].group * 2 === +subjectsClass[1].group || +subjectsClass[0].group * 2 - 1 === +subjectsClass[1].group)
              this.errorMessage = "Błąd grup.";
            else;
          else if ((subjectsClass[1].subjectType === "Exercise" || subjectsClass[1].subjectType === "Seminars") && subjectsClass[0].subjectType === "Laboratories")
            if (+subjectsClass[1].group * 2 === +subjectsClass[0].group || +subjectsClass[1].group * 2 - 1 === +subjectsClass[0].group)
              this.errorMessage = "Błąd grup.";
            else;
          else if ((subjectsClass[0].subjectType === "Exercise" || subjectsClass[0].subjectType === "Seminars") && (subjectsClass[1].subjectType === "Exercise" || subjectsClass[1].subjectType === "Seminars"))
            if (subjectsClass[0].group === subjectsClass[1].group)
              this.errorMessage = "Błąd grup.";
        }

        if (this.errorMessage.length === 0)
          this.editItem.group = this.selectedItem.group;
        break;
      case 4: // teacher DONE
        this.schedule.semesters.map(semester => {
          const t = semester.daysOfWeek[this.weekDay].subjects?.filter(q => q.firstIndex >= this.subjects[this.indexes[0]].firstIndex && q.firstIndex <= this.subjects[this.indexes[0]].lastIndex);
          if (t && t.length) {
            let i = 0;
            t.map(q => {
              i++;
              if (q.teacherName === this.selectedItem.teacherName)
                if (this.editItem.teacherName !== this.selectedItem.teacherName)
                  this.errorMessage = `Lektor zajęty (inna grupa).`
            })
          }
        })

        let pT = [];
        await this.teachersService.getAsyncTeachers().then(q => pT = q);
        const availabilityT = pT?.filter(q => q.name === this.selectedItem.teacherName)[0];
        if (availabilityT) {
          if (availabilityT.availability) {
            if (availabilityT.availability.oneWeek) {
              const days = Object.values(availabilityT.availability.allWeeks);
              if (!days[this.weekDay][this.subjects[this.indexes[0]].firstIndex])
                if (this.lastTeacherEditedName !== this.selectedItem.teacherName)
                  this.errorMessage = "Lektor zajęty (dostępność)."
              this.lastTeacherEditedName = this.selectedItem.teacherName;
            }
          }
        }
        else {
          if (this.selectedItem.teacherName !== this.lastTeacherEditedName)
            this.errorMessage = "Lektor nie istnieje."
          this.lastTeacherEditedName = this.selectedItem.teacherName;

        }


        if (this.errorMessage.length === 0) {
          this.editItem.teacherTitle = this.selectedItem.teacherTitle;
          this.editItem.teacherName = this.selectedItem.teacherName;
        }
        break;

      case 5: // description DONE
        this.selectedItem.description = this.selectedItem.description.length < 20 ? this.selectedItem.description : this.selectedItem.description.substring(0, 20);
        this.editItem.description = this.selectedItem.description;
        break;
    }

    if (this.errorMessage.length === 0) {
      this.editThing = 0;
      this.editMode = false;
      this.selectedItem = {};
      this.selectedItemChange.emit(this.selectedItem);
      this.editedForm.emit(true);
    }
  }
}
