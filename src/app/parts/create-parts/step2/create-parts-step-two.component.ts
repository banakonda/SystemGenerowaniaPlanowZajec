import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from '../../../data/models/StudyField';
import { StudyFieldService } from '../../../study-field/study-field.service';

@Component({
  selector: 'app-create-parts-step-two',
  templateUrl: './create-parts-step-two.component.html',
  styleUrls: ['./create-parts-step-two.component.scss']
})

export class CreatePartsStepTwoComponent {

  listItems$: Observable<StudyFieldAPI[]>;
  zmienna: any[] = [];
  zmienna2: any[][] = [];

  constructor(
    private studyFieldService: StudyFieldService,
  ) { 
    this.refreshList();
  }

  refreshList(): void {

    this.listItems$ = this.studyFieldService.getStudyFields();
    this.listItems$.subscribe( q => this.zmienna = q.map((w:any) => w = w.numberOfSemesters));
    setTimeout(() => {
      for(let item of this.zmienna) {
        let tab = []
        tab.length = item
        tab.fill(0)
        this.zmienna2.push(tab)
      }
      console.log(this.zmienna2)
    }, 100);
  }
}

