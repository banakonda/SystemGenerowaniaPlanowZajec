import { Component, Input, OnInit } from '@angular/core';
import { AssignmentAPI, Assignment } from 'src/app/data/models/Assignment';
import { PartsService } from 'src/app/parts/parts.service';

@Component({
  selector: 'app-create-parts-step-one',
  templateUrl: './create-parts-step-one.component.html',
  styleUrls: ['./create-parts-step-one.component.scss']
})
export class CreatePartsStepOneComponent implements OnInit {

  @Input() newPart: Assignment;

  constructor() { }

  ngOnInit(): void {
    
  }

}

