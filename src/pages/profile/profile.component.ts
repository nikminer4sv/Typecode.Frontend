import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./services/profile.service";
import {ProfileModel} from "./models/profile.model";
import {FinishedTestModel} from "./models/finished-test.model";
import {Utils} from "../index/utils/utils";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  public profileModel!: ProfileModel;
  public finishedTests!: FinishedTestModel[];

  constructor(
    public profile: ProfileService
  ) {}

  ngOnInit(): void {
    this.profile.getProfile().subscribe((profile) => this.profileModel = profile);
    this.profile.getFinishedTests().subscribe((tests) => {this.finishedTests = tests; console.log(this.finishedTests)});
  }

  getFormattedDate(): string {
    let date = new Date(this.profileModel.dateOfBirth);
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
  }

  protected readonly Date = Date;
  protected readonly Utils = Utils;
}
