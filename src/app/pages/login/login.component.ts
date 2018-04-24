import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: FormControl;
  password: FormControl;
  constructor(private auth: AuthService) {
    this.createForm();
  }

  createForm() {
    this.login = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.loginForm = new FormGroup({
      login: this.login,
      password: this.password,
      grant_type: new FormControl('password')
    });
  }

  ngOnInit() { }

  signIn(e) {
    e.preventDefault();
    console.log(this.loginForm.value);
    this.auth
      .signIn(this.loginForm.value)
      .subscribe(response => console.log(response));
  }
}
