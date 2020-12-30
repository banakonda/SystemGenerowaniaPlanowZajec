import { ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit, Optional, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

export type AppInputType = number | string;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }],
})
export class InputComponent implements ControlValueAccessor, Validator {
  control = new FormControl();
  @Input() description: string;
  @Input() placeholder: string;
  @Input() type = "text";
  @Input() disabled = false;
  validation: ValidatorFn[] = [];

  constructor(
    @Optional() @Inject(NG_VALIDATORS) control: ValidatorFn[],
    private cdr: ChangeDetectorRef,
  ) {
    this.control.setValidators(control);
  }

  writeValue(value: AppInputType): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: (value: AppInputType) => void): void {
    this.control.updateValueAndValidity();
    this.control.valueChanges.subscribe((value: AppInputType) => {
      fn(this.type === "number" && typeof (value) === "string" ? Number.parseInt(value as string) : value);
    });
  }
  registerOnTouched(fn: () => void): void { }

  validate(): ValidationErrors | null {
    return this.control.errors;
  }

  ngAfterViewChecked() {
    // if (this.disabled)
    //   this.control.disable();
    this.cdr.detectChanges();
  }
}
