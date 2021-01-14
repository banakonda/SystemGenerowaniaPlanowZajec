import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClassRoomService } from 'src/app/class-rooms/class-rooms.service';
import { ScheduleTeachers } from 'src/app/data/models/Schedule';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';
import { SubjectsService } from 'src/app/subjects/subjects.service';
import { SchedulesService } from '../../schedules.service';

@Component({
  selector: 'app-create-schedule-step-two',
  templateUrl: './create-schedule-step-two.component.html',
})
export class CreateScheduleStepTwoComponent implements OnInit {
  step: number = 1;
  @Input() newSchedule: any;
  studyFields: StudyFieldAPI[] = [];
  classRooms: string[][][] = [];
  subjects: ScheduleTeachers[][][] = [];

  classRoomsNames: string[];
  error = false;
  errorMessage = "";
  get nameOfStudyField(): string {
    if (!this.studyFields) {
      return '';
    }
    const studyFields = this.studyFields.filter(q => q.id === this.newSchedule.studyFieldID)[0];
    if (studyFields !== undefined) {
      return studyFields.name;
    }
  }

  constructor(
    private studyFieldService: StudyFieldService,
    private subjectsService: SubjectsService,
    private classRoomsService: ClassRoomService,
    private schedulesService: SchedulesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.studyFieldService.getStudyFields().subscribe(
      q => this.studyFields = q,
      () => { },
      () => {
        this.newSchedule.numberOfSemesters = this.studyFields.filter(q => q.id == this.newSchedule.studyFieldID)[0].numberOfSemesters;
      });
    this.processData()
  }

  async processData() {
    await this.prepareClassRooms();
    await this.prepareSubjects();
    if (!this.error)
      await this.sendRequest();
  }

  async prepareClassRooms() {
    let temporaryClassRooms: {
      name: string,
      availability: boolean[][],
      countAvailability: number,
    }[];

    await this.classRoomsService.getAsyncClassRooms().then(allClassRooms => {
      this.classRoomsNames = allClassRooms.map(q => q.name);

      temporaryClassRooms = allClassRooms.map(q => {
        let availability: boolean[][] = [];
        if (q.availability.oneWeek === true)
          availability = Object.values(q.availability.allWeeks);
        else {
          const oddObjects = Object.values(q.availability.oddWeeks);
          const evenObjects = Object.values(q.availability.evenWeeks);
          for (let i = 0; i < oddObjects.length; i++)
            availability.push(evenObjects[i] && oddObjects[i]);
        }
        return {
          name: q.name,
          availability: availability,
          countAvailability: availability.map(p => p.filter(x => x === true).length).reduce((a, b) => a + b),
        };
      }).sort((a, b) => a.countAvailability - b.countAvailability);
    });

    for (let i = 0; i < 5; i++) {
      this.classRooms.push([]);
      for (let j = 0; j < 56; j++)
        this.classRooms[i].push(temporaryClassRooms.filter(c => c.availability[i][j] === true).map(c => c.name));
    }
    this.step = 2;
  }

  async prepareSubjects() {
    await this.subjectsService.getAsyncSubjects().then(allSubjects => {
      let teachers = [];
      allSubjects.filter(a => {
        return a.students.studyFieldID === this.newSchedule.studyFieldID;
      }).map(q => {
        let lec = 1;
        let exe = 1;
        let lab = 1;
        let sem = 1;

        q.teachers.forEach(w => {

          let p = [];
          if (w.exerciseEnable)
            for (let i = 1; i < w.exerciseHours + 1; i++, exe++)
              p.push({ type: "Exercise", cr: q.schedule.exercise.enabled ? q.schedule.exercise.classroom : [], grp: exe });
          if (w.lecturesEnable)
            for (let i = 1; i < w.lecturesHours + 1; i++, lec++)
              p.push({ type: "Lectures", cr: q.schedule.lectures.enabled ? q.schedule.lectures.classroom : [], grp: lec });
          if (w.laboratoriesEnable)
            for (let i = 1; i < w.laboratoriesHours + 1; i++, lab++)
              p.push({ type: "Laboratories", cr: q.schedule.laboratories.enabled ? q.schedule.laboratories.classroom : [], grp: lab });
          if (w.seminarsEnable)
            for (let i = 1; i < w.seminarsHours + 1; i++, sem++)
              p.push({ type: "Seminars", cr: q.schedule.seminars.enabled ? q.schedule.seminars.classroom : [], grp: sem });

          let pp = 0;
          for (let k of p) {
            if (k.cr.length > 0) {
              pp = 0;
              for (let ppp of k.cr)
                if (this.classRoomsNames.indexOf(ppp) == -1)
                  pp++;
            }

            // if (pp != 0 && pp === k.cr.length) {
            //   this.showError("Błąd zdefiniowania sal dla: " + w.teacher.name);
            //   return;
            // }

            teachers.push({
              teacherName: w.teacher.name,
              teacherTitle: w.teacher.titleID,
              semesterOfSubject: q.students.semester,
              subjectName: q.name,
              subjectType: k.type,
              className: k.cr,
              availability: w.teacher.availability,
              group: k.grp,
            });
          }
        });
      });

      const teacherAvailability = teachers.map(q => {
        let ava = [];
        if (q.availability.oneWeek)
          ava = Object.values(q.availability.allWeeks)
        else {
          const oddObjects = Object.values(q.availability.oddWeeks);
          const evenObjects = Object.values(q.availability.evenWeeks);
          for (let i = 0; i < oddObjects.length; i++) {
            ava.push(evenObjects[i] && oddObjects[i]);
          }
        }
        return ava;
      })

      for (let i = 0; i < teachers.length; i++) {
        teachers[i] = {
          ...teachers[i],
          availability: teacherAvailability[i],
          countedAva: teacherAvailability[i].map(q => q.filter(x => x === true).length).reduce((p, o) => p + o),
        }
      }
      teachers.sort((a, b) => a.countedAva - b.countedAva);

      for (let i = 0; i < 5; i++) {
        this.subjects.push([]);
        for (let j = 0; j < 56; j++)
          this.subjects[i].push(teachers.filter(c => c.availability[i][j] === true)
            .map(c => {
              return {
                teacherName: c.teacherName,
                teacherTitle: c.teacherTitle,
                semesterOfSubject: c.semesterOfSubject,
                subjectName: c.subjectName,
                subjectType: c.subjectType,
                className: c.className,
                group: c.group.toString(),
              }
            })
          );
      }
    });
    if (!this.error)
      this.step = 3;
  }


  async sendRequest() {
    this.schedulesService.createSchedule({
      name: this.newSchedule.name,
      ifWinter: this.newSchedule.semester === 1 ? true : false,
      lessonWidth: this.newSchedule.lessonWidth,
      studyFieldId: this.newSchedule.studyFieldID,
      numberOfSemester: this.newSchedule.numberOfSemesters,
      classroomsData: this.classRooms,
      teachersData: this.subjects,
    }).subscribe(q => {
      this.step = 4;
      this.router.navigate(['schedules/schedule/' + q]);
    });
  }

  showError(txt: string) {
    this.error = true;
    this.step = 91;
    this.errorMessage = "Generowanie rozkładu anulowano. " + txt;
  }
}
