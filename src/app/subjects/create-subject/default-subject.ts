import { Subject, SubjectTeachers } from 'src/app/data/models/Subject';

export function newSubject(): Subject {
  return {
    name: '',
    students: {
      studyFieldID: '1',
      semester: 1,
    },
    schedule: {
      lectures: { enabled: true, online: false, classroom: [] },
      exercise: { enabled: false, online: false, classroom: [] },
      laboratories: { enabled: false, online: false, classroom: [] },
      seminars: { enabled: false, online: false, classroom: [] },
    },
    teachers: [],
    eligibility: false,
  };
}

export const newSubjectTeacher: SubjectTeachers = {
  teacher: null,
  lecturesEnable: false,
  lecturesHours: 1,
  exerciseEnable: false,
  exerciseHours: 4,
  laboratoriesEnable: false,
  laboratoriesHours: 8,
  seminarsEnable: false,
  seminarsHours: 4,
};
