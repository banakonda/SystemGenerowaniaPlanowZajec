export interface Availability {
  monday: boolean[];
  tuesday: boolean[];
  wednesday: boolean[];
  thursday: boolean[];
  friday: boolean[];
}

export type WeekAvailability = {
  oneWeek: true;
  allWeeks: Availability;
} | {
  oneWeek: false;
  evenWeeks: Availability;
  oddWeeks: Availability;
};
