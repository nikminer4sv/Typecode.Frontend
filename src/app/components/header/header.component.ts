import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../pages/authentication/services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false;
  constructor(
    public auth: AuthenticationService
  ) {}

  ngOnInit(): void {
      this.auth.getRole().subscribe(role => this.isAdmin = role.role == "Admin");
  }

  logout() {
    this.auth.logout();
  }
}
