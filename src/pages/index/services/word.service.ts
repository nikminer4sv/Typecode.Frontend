import { Injectable } from '@angular/core';
import {TestModel} from "../models/test.model";
import {ProfileModel} from "../../profile/models/profile.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  public currentTest: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public testsLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  tests: TestModel[] = [];

  constructor(
    private http: HttpClient
  ) {
    http.get<TestModel[]>(environment.apiUrl + "/test").subscribe((tests) => {this.tests = tests;this.testsLoaded.next(true)});
  }

  getCurrentTest(): Observable<number> {
    return this.currentTest.asObservable();
  }

  setCurrentTest(value: number): void {
    this.currentTest.next(value);
  }
}
