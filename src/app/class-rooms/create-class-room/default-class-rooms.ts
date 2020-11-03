import { Availability } from 'src/app/data/models/Availability';
import { ClassRoom } from 'src/app/data/models/ClassRoom';

export const newClassRoom: ClassRoom = {
  name: '',
  studyFieldID: 1,
  availability: {
    oneWeek: true,
    allWeeks: getWeekAvailability(),
  }
};

export function getWeekAvailability(): Availability {
  return {
    monday: getHoursBooleanArray(),
    tuesday: getHoursBooleanArray(),
    wednesday: getHoursBooleanArray(),
    thursday: getHoursBooleanArray(),
    friday: getHoursBooleanArray(),
  };
}

export function getHoursBooleanArray(): boolean[] {
  return [
    true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, true, true,
    true, true, true, true, true, true, false, false
  ];
}
