export interface StudyField {
  name: string;
  degree: number;
  numberOfSemesters: number,
  fullTime: number,
  erasmus: number;
}

export interface StudyFieldAPI extends StudyField {
  id: string;
}
