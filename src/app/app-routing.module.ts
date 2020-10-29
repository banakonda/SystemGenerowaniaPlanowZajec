import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyFieldComponent } from './study-field/study-field.component';

const routes: Routes = [
  { path: 'fields', component: StudyFieldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
