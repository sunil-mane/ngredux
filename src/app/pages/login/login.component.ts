import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  constructor() {
    this.createForm();
  }

  createForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  ngOnInit() {}

  login(e) {
    e.preventDefault();
    console.log(this.loginForm);
  }
}
