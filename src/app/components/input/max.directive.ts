import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[max]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true }]
})
export class MaxDirective implements Validator {
  @Input('max') max: number;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return Validators.max(this.max)(control);
  }
}
