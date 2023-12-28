import {Component, OnInit} from '@angular/core';
import {TestService} from "./services/test.service";
import {TestModel} from "../index/models/test.model";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent implements OnInit{

  title: string = ""
  text: string = ""

  tests: TestModel[] = []

  constructor(
    private testService: TestService
  ) {}

  ngOnInit(): void {
    this.testService.getTests().subscribe(tests => this.tests = tests);
  }

  add() {
    this.testService.addTest(this.title, this.text);
  }

  delete(id: string) {
    this.testService.deleteTest(id)
  }
}
