import { WeekAvailability } from './Availability';

export interface ClassRoom {
  name: string;
  availability: WeekAvailability;
}

export interface ClassRoomAPI extends ClassRoom {
  id: string;
}
