import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {WordService} from "../../services/word.service";
import {TypeService} from "../../services/type.service";
import {Utils} from "../../utils/utils";

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrl: './typer.component.css'
})
export class TyperComponent implements OnInit {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.typeState)
      this.type.setTypingState(true);

    this.handleInput(event.key);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardBackspaceEvent(event: KeyboardEvent) {
    if (event.key == "Backspace") {
      this.handleBackspace();
    }
  }

  @ViewChild("caret", {static: true})
  caret!: ElementRef;

  @ViewChild("typer", {static: true})
  typerElement!: ElementRef;
  textParts: HTMLElement[] = [];

  text: string = "";
  currentLetterPosition = 0;
  accuracyCounter: number = 0;
  typeState: boolean = false;

  constructor(
    private word: WordService,
    private type: TypeService
  ) {
    this.word.testsLoaded.subscribe(obs=> {
      if (obs) {
        this.word.getCurrentTest().subscribe((res: number) => {
          this.text = this.word.tests[res].text;
          this.initializeTypeArea()
        });
      }
    })
    this.type.getTypingState().subscribe((res: boolean) => {
      this.typeState = res;
      if (!res) {
        this.initializeTypeArea();
      }
    });
  }

  ngOnInit() {
    this.initializeTypeArea()
  }

  private initializeTypeArea() {
    this.accuracyCounter = 0;
    this.caret.nativeElement.style = `left: 0;top: 0;`;
    this.textParts = [];
    this.typerElement.nativeElement.innerText = "";
    this.currentLetterPosition = 0;
    for (let i = 0; i < this.text.length; i++) {
      let element = document.createElement("letter");
      element.innerText = this.text[i];
      this.typerElement.nativeElement.append(element);
      this.textParts.push(element);
    }
  }

  handleBackspace() {
    if (this.currentLetterPosition != 0) {
      let currentLetter = this.textParts[this.currentLetterPosition]
      this.currentLetterPosition -= 1;
      console.log(currentLetter.style.color);
      if (currentLetter.style.color == "rgb(255, 59, 59)")
        this.accuracyCounter -= 1;
      currentLetter.removeAttribute("style");
      this.caret.nativeElement.style = `left: ${currentLetter.offsetLeft - 2}px;top: ${currentLetter.offsetTop - 2}px;`;
    }
  }

  handleInput(inputSymbol: string) {
      if (this.currentLetterPosition == this.text.length - 1) {
        let time = this.type.timer;
        let accuracy = this.roundWithPrecision((this.text.length - this.accuracyCounter) / this.text.length * 100, 2);
        this.type.finishTest(time, accuracy);
        alert("You finished this test in " + Utils.getFormattedTime(time) + ". Accuracy is " + accuracy + "%");
      } else {

        let currentLetter = this.textParts[this.currentLetterPosition]
        let nextLetter = this.textParts[this.currentLetterPosition + 1]

        if (inputSymbol == " ") {
          if (currentLetter.innerText != " ")
            return;
        } else {
          if (currentLetter.innerText == " ")
            return;
        }


        this.caret.nativeElement.style = `left: ${nextLetter.offsetLeft - 2}px;top: ${nextLetter.offsetTop - 2}px;`;

        if (currentLetter.innerText == inputSymbol) {
          currentLetter.setAttribute("style", "color: white;")
        } else {
          currentLetter.setAttribute("style", "color: #ff3b3b;")
          this.accuracyCounter += 1;
        }
        this.currentLetterPosition += 1;
      }
  }

  roundWithPrecision(num: number, precision: number) {
    let multiplier = Math.pow(10, precision);
    return Math.round( num * multiplier ) / multiplier;
  }


}
