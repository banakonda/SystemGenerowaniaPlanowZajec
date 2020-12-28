import { Component, Input, OnInit } from '@angular/core';
import { ClassRoomService } from 'src/app/class-rooms/class-rooms.service';
import { ClassRoomAPI } from 'src/app/data/models/ClassRoom';
import { StudyFieldAPI } from 'src/app/data/models/StudyField';
import { StudyFieldService } from 'src/app/study-field/study-field.service';
import { SubjectsService } from 'src/app/subjects/subjects.service';
import { TeachersService } from 'src/app/teachers/teachers.service';
import { SchedulesService } from '../../schedules.service';

@Component({
  selector: 'app-create-schedule-step-two',
  templateUrl: './create-schedule-step-two.component.html',
  styleUrls: ['./create-schedule-step-two.component.scss']
})
export class CreateScheduleStepTwoComponent implements OnInit {
  @Input() newSchedule: any;
  studyFields: StudyFieldAPI[] = [];
  classRooms: ClassRoomAPI[] = [];
  preparedClassRooms = [];
  preparedSubjects = [];

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
  ) { }

  ngOnInit() {
    this.studyFieldService.getStudyFields().subscribe(q => this.studyFields = q,
      () => { },
      () => {
        this.newSchedule.numberOfSemesters = this.studyFields.filter(q => q.id == this.newSchedule.studyFieldID)[0].numberOfSemesters;
      });
    this.prepareClassRooms()
    this.prepareSubjects();
    this.sendRequest();
  }

  getData(): void {
    this.classRoomsService.getClassRooms().subscribe(q => this.classRooms = q);
  }

  prepareClassRooms() {
    this.classRoomsService.getClassRooms().subscribe(allClassRooms => {
      this.classRooms = allClassRooms;
      const values = this.classRooms.map(q => {
        if (q.availability.oneWeek === true) {
          return {
            name: q.name,
            availability: Object.values(q.availability.allWeeks).map(a => [...a, ...a]),
          };
        } else {
          const oddObjects = Object.values(q.availability.oddWeeks);
          const evenObjects = Object.values(q.availability.evenWeeks);
          const allWeeks: boolean[][] = [];
          for (let i = 0; i < oddObjects.length; i++) {
            allWeeks.push([...evenObjects[i], ...oddObjects[i]]);
          }
          return {
            name: q.name,
            availability: allWeeks,
          };
        }
      });

      let sortedValues = values.map(a => {
        return {
          name: a.name,
          countAvailability: a.availability.map(q => q.filter(x => x === true).length).reduce((p, o) => p + o),
          availability: a.availability,
        }
      });

      sortedValues.sort((a, b) => a.countAvailability - b.countAvailability);

      for (let i = 0; i < 5; i++) {
        this.preparedClassRooms.push([]);
        for (let j = 0; j < 112; j++)
          this.preparedClassRooms[i].push(sortedValues.filter(c => c.availability[i][j] === true).map(c => c.name));
      }
    });
  }

  prepareSubjects() {
    // private String teacherName;
    // private String teacherTitle;
    // private String subjectName;
    // private String subjectType;
    // private String className;

    this.subjectsService.getSubjects().subscribe(allSubjects => {
      const filteredSubjects = allSubjects.filter(a => {
        return a.students.studyFieldID === this.newSchedule.studyFieldID
      });

      let teachers = [];
      const flatTeacher = filteredSubjects.map(q => q.teachers).flat();


      const flatSubject = filteredSubjects.map(q => {
        q.teachers.forEach(w => {
          let p = [];
          if (w.exerciseEnable)
            p.push({ type: "Exercise", cr: q.schedule.exercise.enabled ? q.schedule.exercise.classroom : [] });
          if (w.lecturesEnable)
            p.push({ type: "Lectures", cr: q.schedule.lectures.enabled ? q.schedule.lectures.classroom : [] });
          if (w.laboratoriesEnable)
            p.push({ type: "Laboratories", cr: q.schedule.laboratories.enabled ? q.schedule.laboratories.classroom : [] });
          if (w.seminarsEnable)
            p.push({ type: "Seminars", cr: q.schedule.seminars.enabled ? q.schedule.seminars.classroom : [] });

          for (let k of p)
            teachers.push({
              teacherName: w.teacher.name,
              teacherTitle: w.teacher.titleID,
              semesterOfSubject: q.students.semester,
              subjectName: q.name,
              subjectType: k.type,
              className: k.cr,
              availability: w.teacher.availability,
            });
        });
      });

      const teacherAvailability = teachers.map(q => {
        let ava = [];
        if (q.availability.oneWeek)
          ava = Object.values(q.availability.allWeeks).map(z => [z, z].flat())
        else {
          const oddObjects = Object.values(q.availability.oddWeeks);
          const evenObjects = Object.values(q.availability.evenWeeks);
          for (let i = 0; i < oddObjects.length; i++) {
            ava.push([evenObjects[i], oddObjects[i]].flat());
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
        this.preparedSubjects.push([]);
        for (let j = 0; j < 112; j++)
          this.preparedSubjects[i].push(teachers.filter(c => c.availability[i][j] === true).map(c => {
            return {
              teacherName: c.teacherName,
              teacherTitle: c.teacherTitle,
              semesterOfSubject: c.semesterOfSubject,
              subjectName: c.subjectName,
              subjectType: c.subjectType,
              className: c.className,
            }
          }));
      }
    });
  }

  sendRequest() {
    this.sleep(1000).then(() => {
      this.schedulesService.createSchedule({
        name: "TymczasowyBrak",
        ifWinter: this.newSchedule.semester === 1 ? true : false,
        studyFieldId: this.newSchedule.studyFieldID,
        numberOfSemester: this.newSchedule.numberOfSemesters,
        classroomsData: this.preparedClassRooms,
        teachersData: this.preparedSubjects,
      }).subscribe();
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
