import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-create-schedule-step-three',
  templateUrl: './create-schedule-step-three.component.html',
  styleUrls: ['./create-schedule-step-three.component.scss']
})
export class GeneratedScheduleComponent {
  schedule: any;
  studyField: StudyFieldAPI;
  clockTime: string[] = ['7:30', '7:45', '8:00', '8:15', '8:30', '8:45', '9:00', '9:15', '9:30', '9:45',
    '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45',
    '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45',
    '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45', '18:00', '18:15', '18:30', '18:45',
    '19:00', '19:15', '19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:15',
  ];
  weekDaysShort: string[] = ["Pn", "Wt", "Śr", "Cz", "Pt"];

  index: number = 0;

  selected: number = 0;
  buttons: number[] = [];

  selectedItem: any;
  editedForm: boolean = false;

  addMode = false;
  newSubject = {
    day: "Pn",
    time: "7:30",
    width: 2,
    type: "Lectures"
  }

  id: string;

  addError = false;
  subjectsTypes = [{ id: "Lectures", name: "Wykład" }, { id: "Exercise", name: "Ćwiczenia" }, { id: "Laboratories", name: "Laboratoria" }, { id: "Seminars", name: "Seminaria" }];
  constructor(
    private schedulesService: SchedulesService,
    private studyFieldService: StudyFieldService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => { this.id = params['id'] });
    this.getSchedule();
  }

  async getSchedule() {
    await this.schedulesService.getSchedule(this.id).then(q => {
      let i = 0;
      this.schedule = q;
      this.buttons = [];
      q.semesters.map(p => {
        this.buttons.push(i);
        i++;
      });
    })

    this.studyFieldService.getStudyField(this.schedule.studyFieldId).subscribe(w => { this.studyField = w })
  }

  saveChanges() {
    this.schedulesService.editSchedule(this.schedule).subscribe(q => {
      this.editedForm = false;
    });
  }

  addSubject() {
    this.addError = false
    const subject = this.schedule.semesters[this.selected].daysOfWeek[this.weekDaysShort.indexOf(this.newSubject.day)].subjects;
    const index = this.clockTime.indexOf(this.newSubject.time);
    const valid = subject ? subject.filter(q => q.firstIndex <= index && q.lastIndex >= index) : [];
    const valid2 = subject ? subject.filter(q => q.firstIndex <= index + 3 * this.newSubject.width - 1 && q.lastIndex >= index + 3 * this.newSubject.width - 1) : [];

    if (valid.length !== 2 && valid.length === valid2.length) {
      console.log("STWORZYMY")
      if (!subject)
        this.schedule.semesters[this.selected].daysOfWeek[this.weekDaysShort.indexOf(this.newSubject.day)] = {
          subjects: [],
        }
      this.schedule.semesters[this.selected].daysOfWeek[this.weekDaysShort.indexOf(this.newSubject.day)].subjects.push({
        classRoomName: "online",
        firstIndex: index,
        lastIndex: index + 3 * this.newSubject.width - 1,
        group: "1",
        subjectName: "NOWY PRZEDMIOT",
        subjectType: this.newSubject.type,
        teacherName: "NAUCZYCIEL",
        teacherTitle: "1"
      });
      this.saveChanges();
      this.getSchedule();
      this.addMode = false;
    }
    else
      this.addError = true;
  }
}
