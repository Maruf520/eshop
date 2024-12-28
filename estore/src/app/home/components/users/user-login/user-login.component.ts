import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent implements OnInit {
  userLogInForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  get email(): AbstractControl<any, any> | null {
    return this.userLogInForm.get('email');
  }

  get password(): AbstractControl<any, any> | null {
    return this.userLogInForm.get('password');
  }
  onSUbmit(): void {}
  ngOnInit(): void {}
}
