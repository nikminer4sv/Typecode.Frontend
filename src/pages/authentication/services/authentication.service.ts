import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {LoginResponseModel} from "../models/login-response.model";
import {RegisterResponseModel} from "../models/register-response.model";
import {RegisterModel} from "../models/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'token';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public login(username: string, password: string) {
    let form = new FormData();
    form.append("username", username);
    form.append("password", password);
    return this.http.post<LoginResponseModel>(
      environment.apiUrl + '/auth/login',
      form
    ).subscribe((token) => {
      localStorage.setItem(this.tokenKey, token.accessToken);
      this.router.navigate(['/']);
    });
  }

  public register(registerModel: RegisterModel) {
    let form = new FormData();
    form.append("username", registerModel.username);
    form.append("firstName", registerModel.firstName);
    form.append("lastName", registerModel.lastName);
    form.append("email", registerModel.email);
    form.append("password", registerModel.password);
    form.append("dateOfBirth", new Date(registerModel.dateOfBirth).toISOString());
    return this.http.post<RegisterResponseModel>(
      environment.apiUrl + '/auth/register',
      form
    ).subscribe((response) => {
      this.login(response.username, response.password);
    });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
