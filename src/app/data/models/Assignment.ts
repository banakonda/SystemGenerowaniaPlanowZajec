export interface TeacherAssignments {
    teacherId: string,
    subjectId: string,
    group: number;
}

export interface Assignment {
    name: string;
    ifWinter: boolean,
    groups: [][],
    assignments: TeacherAssignments[];
}
  
export interface AssignmentAPI extends Assignment {
    id: string;
}