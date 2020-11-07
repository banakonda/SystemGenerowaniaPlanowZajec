import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassRoomsComponent } from './class-rooms/class-rooms.component';
import { CreateClassRoomComponent } from './class-rooms/create-class-room/create-class-room.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CreateFieldComponent } from './study-field/create-field/create-field.component';
import { StudyFieldComponent } from './study-field/study-field.component';
import { CreateSubjectComponent } from './subjects/create-subject/create-subject.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'fields', component: StudyFieldComponent },
  { path: 'create-field', component: CreateFieldComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'create-teacher', component: CreateTeacherComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'create-subject', component: CreateSubjectComponent },
  { path: 'class-rooms', component: ClassRoomsComponent },
  { path: 'create-class-room', component: CreateClassRoomComponent },
  { path: 'schedules', component: SchedulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
