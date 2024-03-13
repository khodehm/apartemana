import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[inputValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputValidatorDirective,
      multi: true,
    },
  ],
})
export class InputValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const persianEnRegex = /^[\u0600-\u06FF\s\u200C]+|[a-zA-Z\s]+$/;
    const phoneRegex = /^09[0-9]{9}$/;
    if (!persianEnRegex.test(control.value)) {
      control.setValue('');
      console.log(control.valid, control.value);

      return { invalidInput: true };
    }
    if (!phoneRegex.test(control.value)) {
      control.setValue('');
      console.log(control.valid, control.value);
    }

    return null;
  }
}
