import { WeekAvailability } from './Availability';

export interface Teacher {
  titleID: string;
  name: string;
  email: string;
  hours: number;
  studyFieldId: string;
  availability: WeekAvailability;
}

export interface TeacherAPI extends Teacher {
  id: string;
}
