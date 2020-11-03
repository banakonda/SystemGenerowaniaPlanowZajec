import { WeekAvailability } from './Availability';

export interface Teacher {
  titleID: number;
  name: string;
  studyField: number;
  availability: WeekAvailability;
}

export interface TeacherAPI extends Teacher {
  id: number;
}
