import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileModel} from "../models/profile.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {FinishedTestModel} from "../models/finished-test.model";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(
    private http: HttpClient
  ) { }

  public getProfile(): Observable<ProfileModel>{
    return this.http.get<ProfileModel>(environment.apiUrl + "/auth/profile")
  }

  public getFinishedTests(): Observable<FinishedTestModel[]> {
    return this.http.get<FinishedTestModel[]>(environment.apiUrl + "/finishedtest")
  }

  public setReport(): void {
    this.http.post(environment.apiUrl + "/notification/send", {}).subscribe(() => {
      window.location.reload();
    })
  }
}
