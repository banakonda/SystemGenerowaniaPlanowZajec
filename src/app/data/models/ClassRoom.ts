import { WeekAvailability } from './Availability';

export interface ClassRoom {
  name: string;
  availability: WeekAvailability;
  studyFieldID: string;
}

export interface ClassRoomAPI extends ClassRoom {
  id: string;
}
