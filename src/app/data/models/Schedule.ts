export interface Schedule {
  name: string;
  studyFieldId: string;
  ifWinter: boolean,
  lessonWidth: number,
  numberOfSemester: number,
  classroomsData: string[][][],
  teachersData: ScheduleTeachers[][][],
}

export interface ScheduleTeachers {
  teacherName: string,
  teacherTitle: string,
  semesterOfSubject: number,
  subjectName: string,
  subjectType: string,
  className: string,
  group: number,
}


export interface ScheduleAPI extends Schedule {
  id: string;
}

