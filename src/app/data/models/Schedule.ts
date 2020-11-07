export interface Day {
  name: string;       // "1.10"

}

export interface Schedule {
  name: string;
  studyFieldID: string;
}

export interface ScheduleAPI extends Schedule {
  id: string;
}

