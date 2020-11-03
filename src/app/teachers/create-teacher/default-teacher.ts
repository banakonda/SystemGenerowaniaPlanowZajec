import { Availability } from 'src/app/data/models/Availability';
import { Teacher } from 'src/app/data/models/Teacher';

export const newTeacher: Teacher = {
  titleID: 1,
  name: '',
  studyField: 1,
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
