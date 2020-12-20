import { Subject, SubjectTeachers } from 'src/app/data/models/Subject';

export function newSubject(): Subject {
  return {
    name: '',
    students: {
      studyFieldID: '1',
      semester: 1,
    },
    schedule: {
      lectures: { enabled: true, hours: 30, online: false, classroom: [] },
      exercise: { enabled: false },
      laboratories: { enabled: false },
      seminars: { enabled: false },
    },
    teachers: [],
    eligibility: false,
  };
}

export const newSubjectTeacher: SubjectTeachers = {
  teacher: null,
  lecturesEnable: false,
  lecturesHours: 30,
  exerciseEnable: false,
  exerciseHours: 30,
  laboratoriesEnable: false,
  laboratoriesHours: 30,
  seminarsEnable: false,
  seminarsHours: 30,
};
