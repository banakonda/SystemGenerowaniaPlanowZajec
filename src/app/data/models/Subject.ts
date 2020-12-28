import { TeacherAPI } from './Teacher';

interface StudyStudents {
  studyFieldID: string;
  semester: number;
}

type ScheduleActivities = {
  enabled: boolean;
  online: boolean;
  classroom: string[];
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
  lecturesHours: number;
  exerciseEnable: boolean;
  exerciseHours: number;
  laboratoriesEnable: boolean;
  laboratoriesHours: number;
  seminarsEnable: boolean;
  seminarsHours: number;
}

export interface Subject {
  name: string;
  students: StudyStudents;
  schedule: SubjectSchedule;
  teachers: SubjectTeachers[];
  eligibility: boolean;
}

export interface SubjectAPI extends Subject {
  id: string;
}
