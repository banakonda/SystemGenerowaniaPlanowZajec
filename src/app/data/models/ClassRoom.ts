import { WeekAvailability } from './Availability';

export interface ClassRoom {
  name: string;
  availability: WeekAvailability;
  studyFieldID: number;
}

export interface ClassRoomAPI extends ClassRoom {
  id: number;
}
