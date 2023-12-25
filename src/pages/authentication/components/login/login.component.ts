import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup ({
    username: new FormControl(""),
    password: new FormControl("")
  });

  constructor(
    private auth: AuthenticationService
  ) {}

  public onSumbit() {
    let username = this.loginForm.controls.username.value
    let password = this.loginForm.controls.password.value
    if (username != null && password != null) {
      this.auth.login(username, password);
    }
  }

}
