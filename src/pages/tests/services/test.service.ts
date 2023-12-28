import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TestsModule} from "../tests.module";
import {TestModel} from "../../index/models/test.model";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  addTest(title: string, text: string) {
    this.http.post(environment.apiUrl + "/test", {title: title, text: text}).subscribe(() => {
      window.location.reload()
    });
  }

  getTests() {
    return this.http.get<TestModel[]>(environment.apiUrl + "/test");
  }

  deleteTest(id: string) {
    this.http.delete(environment.apiUrl + `/test?id=${id}`).subscribe(() => {
      window.location.reload()
    });
  }
}
