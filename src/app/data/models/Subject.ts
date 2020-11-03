import { TeacherAPI } from './Teacher';

interface StudyStudents {
  studyFieldID: number;
  semester: number;
}

type ScheduleActivities = {
  enabled: false;
} | {
  enabled: true,
  hours: number;
};

interface SubjectSchedule {
  lectures: ScheduleActivities;
  exercise: ScheduleActivities;
  laboratories: ScheduleActivities;
  seminars: ScheduleActivities;
}

export interface SubjectTeachers {
  teacher: TeacherAPI;
  lecturesEnable: boolean;
  exerciseEnable: boolean;
  laboratoriesEnable: boolean;
  seminarsEnable: boolean;
}

export interface Subject {
  name: string;
  students: StudyStudents;
  schedule: SubjectSchedule;
  teachers: SubjectTeachers[];
  eligibility: boolean;
}

export interface SubjectAPI extends Subject {
  id: number;
}
