import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {TestModel} from "../models/test.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {WordService} from "./word.service";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private isTyping: BehaviorSubject<boolean>;
  public timer: number = 0;

  constructor(
    private http: HttpClient,
    private word: WordService
  ) {
    this.isTyping = new BehaviorSubject<boolean>(false);
  }

  setTypingState(state: boolean) {
    if (!state)
      this.timer = 0;
    this.isTyping.next(state);
  }

  getTypingState(): Observable<boolean> {
    return this.isTyping.asObservable();
  }

  finishTest(time: number, accuracy: number) {
    let test = this.word.tests[this.word.currentTest.value];
    console.log({time: time, accuracy: accuracy, testId: test.id})
    this.http.post(environment.apiUrl + "/finishedtest", {time: time, accuracy: accuracy, testId: test.id}).subscribe();
    this.setTypingState(false);
  }


}
