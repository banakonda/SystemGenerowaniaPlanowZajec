import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidePanelComponent } from './common/side-panel/side-panel.component';
import { CreateButtonsComponent } from './common/create-buttons/create-buttons.component';
import { TypeButtonsComponent } from './common/type-buttons/type-buttons.component';
import { StudyFieldComponent } from './study-field/study-field.component';
import { CreateFieldComponent } from './study-field/create-field/create-field.component';

import { CreateFieldStepOneComponent } from './study-field/create-field/step1/create-field-step-one.component';
import { FormsModule } from '@angular/forms';
import { TeachersComponent } from './teachers/teachers.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { CreateTeacherStepOneComponent } from './teachers/create-teacher/step1/create-teacher-step-one.component';
import { CreateTeacherStepTwoComponent } from './teachers/create-teacher/step2/create-teacher-step-two.component';
import { AvailabilityComponent } from './common/availability/availability.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { CreateSubjectComponent } from './subjects/create-subject/create-subject.component';
import { CreateSubjectStepOneComponent } from './subjects/create-subject/step1/create-subject-step-one.component';
import { CreateSubjectStepTwoComponent } from './subjects/create-subject/step2/create-subject-step-two.component';
import { CreateSubjectStepThreeComponent } from './subjects/create-subject/step3/create-subject-step-three.component';
import { CreateSubjectStepFourComponent } from './subjects/create-subject/step4/create-subject-step-four.component';
import { ClassRoomsComponent } from './class-rooms/class-rooms.component';
import { CreateClassRoomComponent } from './class-rooms/create-class-room/create-class-room.component';
import { CreateClassRoomStepOneComponent } from './class-rooms/create-class-room/step1/create-class-room-step-one.component';
import { CreateClassRoomStepTwoComponent } from './class-rooms/create-class-room/step2/create-class-room-step-two.component';
import { SchedulesComponent } from './schedules/schedules.component';
@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    CreateButtonsComponent,
    TypeButtonsComponent,
    StudyFieldComponent,
    CreateFieldComponent,
    CreateFieldStepOneComponent,
    TeachersComponent,
    CreateTeacherComponent,
    CreateTeacherStepOneComponent,
    CreateTeacherStepTwoComponent,
    AvailabilityComponent,
    SubjectsComponent,
    CreateSubjectComponent,
    CreateSubjectStepOneComponent,
    CreateSubjectStepTwoComponent,
    CreateSubjectStepThreeComponent,
    CreateSubjectStepFourComponent,
    ClassRoomsComponent,
    CreateClassRoomComponent,
    CreateClassRoomStepOneComponent,
    CreateClassRoomStepTwoComponent,
    SchedulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
