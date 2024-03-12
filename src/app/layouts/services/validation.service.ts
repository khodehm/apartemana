import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Injectable({ providedIn: 'root' })
export default class validationService {
  constructor(private fb: FormBuilder) {}
  validateForm() {
    this.fb.control.name;
  }
  formBuilder(): FormGroup {
    return this.fb.group({
      managerName: [
        '',
        Validators.required,
        Validators.pattern('^[\u0600-\u06FFa-zA-Z]*$'),
      ],
      managerPhone: [
        '',
        [Validators.required, Validators.pattern('^09\\d{7}$')],
      ],
      numberUnit: ['', Validators.required],
    });
  }
}
