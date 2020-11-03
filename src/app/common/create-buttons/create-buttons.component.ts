import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-buttons',
  templateUrl: './create-buttons.component.html',
  styleUrls: ['./create-buttons.component.scss'],
})
export class CreateButtonsComponent implements OnInit {
  @Input() f: NgForm;
  @Input() step: number;
  @Input() lastStep: number;
  @Input() cancelLink: string;
  @Output() stepChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.cancelLink = '/' + this.cancelLink;
  }
  setStepValue(step: number): void {
    this.step = step;
    this.stepChange.emit(step);
  }
}
