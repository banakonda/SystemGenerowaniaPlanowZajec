import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-type-buttons',
  templateUrl: './type-buttons.component.html',
})
export class TypeButtonsComponent {
  @Input() buttons: any[] = [];
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  change(button: string): void {
    this.selected = button;
    this.selectedChange.emit(this.selected);
  }
}
