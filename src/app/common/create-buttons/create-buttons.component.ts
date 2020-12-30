import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-buttons',
  templateUrl: './create-buttons.component.html',
  styleUrls: ['./create-buttons.component.scss'],
})
export class CreateButtonsComponent implements OnInit {
  @Input() f: NgForm;
  @Input() cancelLink: string;
  @Input() step: number;
  @Output() private stepChange = new EventEmitter<number>();
  @Input() lastStep: number;

  ngOnInit(): void {
    this.cancelLink = '/' + this.cancelLink;
  }
  setStepValue(step: number): void {
    this.step = step;
    this.stepChange.emit(step);
  }
}
