import { Inject, Input, Optional, Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export type AppInputType = number | string;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: DropdownComponent, multi: true }],
})
export class DropdownComponent implements ControlValueAccessor, Validator {
  control = new FormControl();
  @Input() description: string;
  @Input() data: Array<any> = [];
  @Input() value: string = "id";
  @Input() display: string = "name";
  @Input() additionalDisplay?: string;
  @Input() additionalDescription?: string;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) control: ValidatorFn[],
  ) {
    this.control.setValidators(control);
  }

  writeValue(value: AppInputType): void {
    this.control.setValue(value);
  }
  registerOnChange(fn: (value: AppInputType) => void): void {
    this.control.updateValueAndValidity();
    this.control.valueChanges.subscribe((value: AppInputType) => {
      fn(value);
    });
  }
  registerOnTouched(fn: () => void): void { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.control.errors;
  }

}
