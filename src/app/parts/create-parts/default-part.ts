import { Assignment, TeacherAssignments } from "src/app/data/models/Assignment";

export function newPart(): Assignment {
    return {
      name: '',
      ifWinter: true,
      groups: [],
      assignments: []
  }
}