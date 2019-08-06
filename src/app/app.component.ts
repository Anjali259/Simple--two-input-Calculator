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
  results: any[];
  public combineresult: number;
  public displayname: boolean;
  public displayreverse: boolean;
  displaycombine: boolean;

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
    var result = parseFloat((this.num1 / this.num2).toFixed(2));
    this.result = result;
  }

  onMultiplication() {
    this.displayname = true;
    this.result = this.num1 * this.num2;
  }
  clear() {
    this.displayname = false;
    this.displayreverse = false;
    this.displaycombine = false;
    this.num1 = this.num2 = null;
  }

  reverse(num) { // number = 2345
    this.displayreverse = true;
    this.displaycombine = false;
    this.displayname = false;

    let str = num.toString(); // converted number to string
    let r = '';
    for (var i = str.length - 1; i >= 0; i--)
    // Initially i will be 3 (string length is 4 (number is 2345) - 1) 
    {
      r = r + str[i]; //so str[i] = str[3] = 5 from (number = 2345) reverse
      console.log(r);
    }
    return this.result = parseInt(r);
  }

  combinenum(str) {
    this.displaycombine = true;
    this.displayreverse = false;
    this.displayname = false;
    let num = str.toString();
    let result = [];
    let r1 = '';
    let r2 = '';
    let r3: number;
    let r4: number;
    this.displaycombine = true;
    // Since you only want pairs, there's no reason
    // to iterate over the last element directly
    if(num!=null){
    for (let i = 0; i < num.length - 1; i++) {
      // This is where you'll capture that last value
      for (let j = i + 1; j < num.length; j++) {
        r1 = num[i] + num[j];
        r2 = num[j] + num[i];
        r3 = parseInt(r1);
        r4 = parseInt(r2);
        result.push(r3);
        result.push(r4);
        }
    }
  }
    // alert(result);
    return  this.results = result;
    
    
  }

}












