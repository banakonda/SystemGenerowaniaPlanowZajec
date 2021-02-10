import { WeekAvailability } from './Availability';

export interface HoursByType {
    hoursCurr: number;
    hoursIstZ: number;
    hoursIstL: number; 
    hoursIIstL: number;
    hoursIIstZ: number;
    hoursInstZ: number;
    hoursInstL: number;
    hoursIInstZ: number;
    hoursIInstL: number;
}

export interface Teacher {
  titleID: string;
  name: string;
  email: string;
  hours: number;
  hoursByType: HoursByType;
  studyFieldId: string;
  availability: WeekAvailability;
}

export interface TeacherAPI extends Teacher {
  id: string;
}
