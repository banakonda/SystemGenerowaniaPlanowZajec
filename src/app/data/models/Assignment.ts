export interface TeacherAssignments {
    teacherId: string,
    subjectName: string,
    lecturesGroups: number,
    exerciseGroups: number,
    laboratoriesGroups: number,
    seminarsGroups: number,
}

export interface Assignment {
    name: string;
    ifWinter: boolean,
    groups: [][][],
    assignments: TeacherAssignments[];
}
  
export interface AssignmentAPI extends Assignment {
    id: string;
}