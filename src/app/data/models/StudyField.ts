export interface StudyField {
  name: string;
  degree: number;
  numberOfSemesters: number;
  departmentID: number;
}

export interface StudyFieldAPI extends StudyField {
  id: number;
}
