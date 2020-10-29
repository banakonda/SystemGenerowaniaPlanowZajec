import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-buttons',
  templateUrl: './create-buttons.component.html',
})
export class CreateButtonsComponent {
  @Input() f: NgForm;
  @Input() step: number;
  @Input() lastStep: number;
  @Input() cancelLink: string;
  @Output() stepChange = new EventEmitter<number>();

  constructor() {
    this.cancelLink = '/' + this.cancelLink;
  }

  setStepValue(step: number): void {
    this.step = step;
    this.stepChange.emit(step);
  }
}
