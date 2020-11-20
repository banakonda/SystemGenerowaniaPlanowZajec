import { StudyField } from 'src/app/data/models/StudyField';

export function newStudyField(): StudyField {
  return {
    name: '',
    degree: 1,
    numberOfSemesters: 1,
    departmentID: '1',
  };
}
