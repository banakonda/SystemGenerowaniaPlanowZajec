export interface StudyField {
  name: string;
  degree: number;
  numberOfSemesters: number;
  departmentID: string;
}

export interface StudyFieldAPI extends StudyField {
  id: string;
}
