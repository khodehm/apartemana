import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[PhoneNumberValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumberValidationDirective,
      multi: true,
    },
  ],
})
export class PhoneNumberValidationDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const phoneRegex = /^09[0-9]{9}$/;
    const persianEnRegex = /^[\u0600-\u06FF\s\u200C]+|[a-zA-Z\s]+$/;

    if (persianEnRegex.test(control.value)) {
      control.setValue('');
      console.log(control.valid, control.value);
      return { invalidInput: true };
    }
    
    return null;
  }
}
