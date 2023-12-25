import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./services/profile.service";
import {ProfileModel} from "./models/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  public profileModel!: ProfileModel;

  constructor(
    private profile: ProfileService
  ) {}

  ngOnInit(): void {
    this.profile.getProfile().subscribe((profile) => this.profileModel = profile);
  }

  getFormattedDate(): string {
    let date = new Date(this.profileModel.dateOfBirth);
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
  }

  protected readonly Date = Date;
}
