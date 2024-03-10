import { Component, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Inject } from '@angular/core';
import validationService from '../../services/validation.service';
import { IUser } from '../../services/Iuser';
@Component({
  selector: 'landing-page3',
  templateUrl: './page3.component.html',
  styleUrl: 'page3.component.scss',
})
export class Page3Component implements OnInit {
  isOpen: boolean = false;
  modalVisibility: boolean = true;
  loading!: boolean;
  form!: FormGroup;
  users!: IUser;
  OnLoad() {
    this.loading = !this.loading;
  }
  handleInValidExecution() {
    Object.values(this.form.controls).forEach((control) => {
      if (control.invalid) {
        this.loading = false;
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }
  constructor(private formgen: validationService) {}
  ngOnInit() {
    this.form = this.formgen.formBuilder();
  }

  onFormSubmit() {
    if (this.form.valid) {
      console.log('Form Submit Success:', this.form.value);
    } else {
      throw 'not valid form ';
    }
  }
  formColapse() {
    this.isOpen = !this.isOpen;
  }
}
