import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from './check-validator';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css']
})
export class ReactiveFormComponent {
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), customValidator(/[@#$%^&]/g)]],
      email: ['test@gmail.com'],
      password: [''],
      confirmPass: ['']
    }, { validators: passwordValidator });
  }

  get name() {
    return this.regForm.get('name');
  }

  setDefaultValues(): void {
    this.regForm.patchValue({
      name: 'Huỳnh Giao',
      email: 'test@gmail.com',
      password: '',
      confirmPass: ''
    });
  }

  onSubmit(): void {
    console.log('Form data:', this.regForm.value);
  }
}
