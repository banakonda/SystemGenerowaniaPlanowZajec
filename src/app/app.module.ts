import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidePanelComponent } from './common/side-panel/side-panel.component';
import { CreateButtonsComponent } from './common/create-buttons/create-buttons.component';
import { TypeButtonsComponent } from './common/type-buttons/type-buttons.component';
import { StudyFieldComponent } from './study-field/study-field.component';
import { CreateFieldComponent } from './study-field/create-field/create-field.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    CreateButtonsComponent,
    TypeButtonsComponent,
    StudyFieldComponent,
    CreateFieldComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
