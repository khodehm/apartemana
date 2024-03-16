import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Type,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IUser } from '../../../services/Iuser';

@Component({
  selector: 'landing-page3',
  templateUrl: './page3.component.html',
  styleUrl: 'page3.component.scss',
})
export class Page3Component implements OnInit {
  isOpen: boolean = false;
  modalVisibility: boolean = false;
  inputFocus: boolean = false;
  isSubmitSuccessFull: boolean = false;
  loading: boolean = false;
  form!: FormGroup;
  users!: IUser;
  constructor(private fb: FormBuilder, private formLabel: ElementRef) {}

  ngOnInit() {
    this.initForm();
  }

  OnLoad() {
    this.loading = !this.loading;
    console.log(this.loading);
  }
  initForm() {
    this.form = this.fb.group({
      managerName: ['', Validators.required],
      managerPhone: ['', [Validators.required]],
      numberUnit: ['', Validators.required],
    });
    
  }
  handleInValidExecution() {
    Object.values(this.form.controls).forEach((control) => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      this.loading = true;
      console.log('Form Submit Success:', this.form.value);
      setTimeout(() => {
        this.isSubmitSuccessFull = true;
      }, 1000);
    } else {
      this.handleInValidExecution();
      throw 'not valid form ';
    }
    console.log(this.form.value);
  }
  formColapse() {
    this.modalVisibility = !this.modalVisibility;
    this.form.reset();
    this.isSubmitSuccessFull = false;
  }
  //end of form begning event Liteners
}
