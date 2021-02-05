import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Assignment, AssignmentAPI } from 'src/app/data/models/Assignment';
import { PartsService } from '../parts.service';
import { newPart } from './default-part';

@Component({
  selector: 'app-create-parts',
  templateUrl: './create-parts.component.html',
  styleUrls: ['./create-parts.component.scss']
})
export class CreatePartsComponent {

  step = 1;
  lastStep = 3;
  edit = false;

  newPart = newPart();

  @Input() set part(value: AssignmentAPI) {
    this.newPart = value;
    this.edit = true;
  }

  constructor(
    private partsService: PartsService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  createPart(): void {
    let error = 0;
    try {
      if (!this.edit)
        this.partsService.createAssignment(this.newPart).subscribe(q => { this.snackBar(q); });
      else
        this.partsService.editAssignment(this.newPart as AssignmentAPI).subscribe(q => { this.snackBar(q); });
    } catch {
      error = 1;
    } finally {
    }
  }

  snackBar(q: any) {
    this._snackBar.open(q, undefined, {
      duration: 3000,
    });
    this.router.navigate(['/parts']);
  }

}
