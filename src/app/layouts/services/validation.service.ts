import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export default class validationService {
  //   submitApplication(
  //     managerName: string,
  //     managerPhone: number | string,
  //     numberUnit: number | string
  //   ) {
  //     console.log(managerName, managerPhone, numberUnit);

 
  constructor(private fb: FormBuilder) {}
  formBuilder(): FormGroup {
    return this.fb.group({
      managerName: ['', Validators.required],
      managerPhone: ['', Validators.required],
      numberUnit: ['', Validators.required],
    });
  }
}
