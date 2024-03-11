import { Component, OnInit, Type, inject } from '@angular/core';
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
  modalVisibility: boolean = false;
  loading!: boolean;
  form!: FormGroup;
  users!: IUser;
  placeHolder!:['نام ونام خانوادگی مدیر ساختمان',"شماره موبایل مدیر ساختمان","تعداد واحد ساختمان شما"];
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
  constructor(private formGen: validationService) {}
  ngOnInit() {
    this.form = this.formGen.formBuilder();
  }

  onFormSubmit() {
    if (this.form.valid) {
      console.log('Form Submit Success:', this.form.value);
    } else {
      this.handleInValidExecution();
      throw 'not valid form ';
    }
  }
  formColapse() {
    this.modalVisibility = !this.modalVisibility;
    this.form.reset();
  }
}
