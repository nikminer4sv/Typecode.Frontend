import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileModel} from "../models/profile.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
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
}
