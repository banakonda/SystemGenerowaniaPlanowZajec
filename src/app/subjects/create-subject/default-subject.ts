import { Subject, SubjectTeachers } from 'src/app/data/models/Subject';

export const newSubject: Subject = {
  name: '',
  students: {
    studyFieldID: 1,
    semester: 1,
  },
  schedule: {
    lectures: { enabled: true, hours: 30 },
    exercise: { enabled: false },
    laboratories: { enabled: false },
    seminars: { enabled: false },
  },
  teachers: [],
  eligibility: false,
};

export const newSubjectTeacher: SubjectTeachers = {
  teacher: null,
  lecturesEnable: false,
  exerciseEnable: false,
  laboratoriesEnable: false,
  seminarsEnable: false,
};
