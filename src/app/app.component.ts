import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  num1: number;
  num2: number;
  public result: number;
  public displayname: boolean;

  onAddition() {
    this.displayname = true;
    this.result = this.num1 + this.num2;

  }

  onSubtraction() {
    this.displayname = true;
    this.result = this.num1 - this.num2;
  }
  onDivision() {
    this.displayname = true;
    this.result = this.num1 / this.num2;
  }

  onMultiplication() {
    this.displayname = true;
    this.result = this.num1 * this.num2;
  }
  clear() {
    this.displayname = false;
    this.num1 = this.num2 = null;
  }
}
