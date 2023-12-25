import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup ({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl(""),
    dateOfBirth: new FormControl(new Date()),
    password: new FormControl(""),
  });

  constructor(
    private auth: AuthenticationService
  ) {}

  public onSumbit() {
    this.auth.register({
      username: this.registerForm.controls.username.value || "",
      firstName: this.registerForm.controls.firstName.value || "",
      lastName: this.registerForm.controls.lastName.value || "",
      email: this.registerForm.controls.email.value || "",
      password: this.registerForm.controls.password.value || "",
      dateOfBirth: this.registerForm.controls.dateOfBirth.value || new Date(),
    });
  }
}
