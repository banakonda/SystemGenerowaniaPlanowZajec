import { Subject, SubjectTeachers } from 'src/app/data/models/Subject';

export function newSubject(): Subject {
    return {
      name: '',
      students: {
        studyFieldID: '',
        semester: 1,
      },
      schedule: {
        lectures: { enabled: true, hours: 0, online: false, classroom: [] },
        exercise: { enabled: false, hours: 0, online: false, classroom: [] },
        laboratories: { enabled: false, hours: 0, online: false, classroom: [] },
        seminars: { enabled: false, hours: 0, online: false, classroom: [] },
      },
      teachers: [],
      eligibility: false,
      rate: 1,
    };
  }
  
  export interface SubjectTeacher {
    teacherId: string,
    subjectName: string,
    lecturesEnable: boolean,
    lecturesHours: number,
    exerciseEnable: boolean,
    exerciseHours: number,
    laboratoriesEnable: boolean,
    laboratoriesHours: number,
    seminarsEnable: boolean,
    seminarsHours: number,
  }

  export const newSubjectTeacher: SubjectTeacher = {
    teacherId: null,
    subjectName: "",
    lecturesEnable: false,
    lecturesHours: 1,
    exerciseEnable: false,
    exerciseHours: 4,
    laboratoriesEnable: false,
    laboratoriesHours: 8,
    seminarsEnable: false,
    seminarsHours: 4,
  };