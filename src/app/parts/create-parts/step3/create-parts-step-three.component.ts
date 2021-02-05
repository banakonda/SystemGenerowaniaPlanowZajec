import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TeacherAPI } from '../../../data/models/Teacher';
import { TitleAPI } from '../../../data/models/Title';
import { TitleService } from '../../../data/title.service';
import { TeachersService } from '../../../teachers/teachers.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-create-parts-step-three',
  templateUrl: './create-parts-step-three.component.html',
  styleUrls: ['./create-parts-step-three.component.scss']
})
export class CreatePartsStepThreeComponent {

  listItems$: Observable<TeacherAPI[]>;

  constructor(
    private teachersService: TeachersService,
    public matDialog: MatDialog
  ) { 
    this.refreshList();
  }

  refreshList(): void {
    this.listItems$ = this.teachersService.getTeachers();
  }

  // ngOnInit {
  //   console.log(this.listItems$)
  // }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogComponent, dialogConfig);
  }


}
