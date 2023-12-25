import { Component } from '@angular/core';
import {AuthenticationService} from "../../../pages/authentication/services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    public auth: AuthenticationService
  ) {}

  logout() {
    this.auth.logout();
  }
}
