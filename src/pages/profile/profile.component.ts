import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./services/profile.service";
import {ProfileModel} from "./models/profile.model";
import {AuthenticationService} from "../authentication/services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  public profileModel!: ProfileModel;

  constructor(
    private auth: AuthenticationService,
    private profile: ProfileService
  ) {}

  ngOnInit(): void {
    this.profile.getProfile().subscribe((profile) => this.profileModel = profile);
  }

  logout() {
    this.auth.logout();
  }

}
