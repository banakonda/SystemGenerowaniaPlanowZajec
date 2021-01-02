import { WeekAvailability } from './Availability';

export interface Teacher {
  titleID: string;
  name: string;
  email: string;
  studyFieldId: string;
  availability: WeekAvailability;
}

export interface TeacherAPI extends Teacher {
  id: string;
}
