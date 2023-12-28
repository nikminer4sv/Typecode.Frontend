import {Component, OnInit} from '@angular/core';
import {TypeService} from "../../services/type.service";
import {Utils} from "../../utils/utils";
import {WordService} from "../../services/word.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {

  constructor(
    private type: TypeService,
    public word: WordService
  ) {}

  public seconds: number = 0;
  public testNumber: number = 0;

  ngOnInit() {

    let input = document.querySelector("button");
    if (input != null) {
      input.addEventListener("click", () => {if (input != null) input.blur();});
    }
    let counterInterval: any;
    this.type.getTypingState().subscribe(value => {
      if (value) {
        counterInterval = setInterval(() => {
          this.seconds += 1;
          this.type.timer += 1;
        },1000)
      } else {
        clearInterval(counterInterval);
        this.seconds = 0;
      }
    })
  }

  restart() {
    this.type.setTypingState(false);
  }

  testChanged() {
    this.word.setCurrentTest(this.testNumber);
  }

  protected readonly Utils = Utils;
}
