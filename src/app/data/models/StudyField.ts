export interface StudyField {
  name: string;
  degree: number;
  numberOfSemesters: number;
}

export interface StudyFieldAPI extends StudyField {
  id: string;
}
