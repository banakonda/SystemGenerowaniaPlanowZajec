import { WeekAvailability } from './Availability';

export interface Teacher {
  titleID: string;
  name: string;
  email: string;
  studyFieldId: string; // this is id actually
  availability: WeekAvailability;
}

export interface TeacherAPI extends Teacher {
  id: string;
}
