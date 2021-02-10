import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassRoomsComponent } from './class-rooms/class-rooms.component';
import { CreateClassRoomComponent } from './class-rooms/create-class-room/create-class-room.component';
import { EditClassRoomComponent } from './class-rooms/create-class-room/edit-class-room.component';
import { PartsComponent } from './parts/parts.component';
import { EditPartComponent } from './parts/create-parts/edit-part.component';
import { CreatePartsComponent } from './parts/create-parts/create-parts.component';
import { CreateScheduleComponent } from './schedules/create-schedule/create-schedule.component';
import { GeneratedScheduleComponent } from './schedules/schedule/create-schedule-step-three.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { CreateFieldComponent } from './study-field/create-field/create-field.component';
import { EditFieldComponent } from './study-field/create-field/edit-field.component';
import { StudyFieldComponent } from './study-field/study-field.component';
import { CreateSubjectComponent } from './subjects/create-subject/create-subject.component';
import { EditSubjectComponent } from './subjects/create-subject/edit-subject.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { EditTeacherComponent } from './teachers/create-teacher/edit-teacher.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'fields', component: StudyFieldComponent },
  { path: 'create-field', component: CreateFieldComponent },
  { path: 'edit-field/:id', component: EditFieldComponent },

  { path: 'teachers', component: TeachersComponent },
  { path: 'create-teacher', component: CreateTeacherComponent },
  { path: 'edit-teacher/:id', component: EditTeacherComponent },

  { path: 'class-rooms', component: ClassRoomsComponent },
  { path: 'create-class-room', component: CreateClassRoomComponent },
  { path: 'edit-class-room/:id', component: EditClassRoomComponent },

  { path: 'subjects', component: SubjectsComponent },
  { path: 'create-subject', component: CreateSubjectComponent },
  { path: 'edit-subject/:id', component: EditSubjectComponent },

  { path: 'parts', component: PartsComponent },
  { path: 'create-parts', component: CreatePartsComponent },
  { path: 'edit-part/:id', component: EditPartComponent },

  { path: 'schedules', component: SchedulesComponent },
  { path: 'create-schedule', component: CreateScheduleComponent },
  { path: 'schedules/schedule/:id', component: GeneratedScheduleComponent },

  { path: '**', component: StudyFieldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
