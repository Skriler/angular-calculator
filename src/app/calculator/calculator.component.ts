import { Component, OnInit } from '@angular/core';
import {MathService} from "../shared/services/math.service";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  private readonly notifier: NotifierService;
  public firstNum: number = 0;
  public secondNum: number = 0;
  public result: number = 0;

  constructor(private mathService: MathService,
              private notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  public calculate(operation: string) {
    let action: any;

    switch(operation)
    {
      case '+':
        action = this.mathService.add;
        break;
      case '-':
        action = this.mathService.subtract;
        break;
      case '*':
        action = this.mathService.multiply;
        break;
      case '/':
        action = this.mathService.divide;
        break;
      case '%':
        action = this.mathService.mod;
        break;
      case 'sqrt':
        action = this.mathService.sqrt;
        break;
      case 'pow':
        action = this.mathService.pow;
        break;
      case 'x!':
        action = this.mathService.factorial;
        break;
      case 'sin':
        action = this.mathService.sin;
        break;
      case 'cos':
        action = this.mathService.cos;
        break;
      case 'tan':
        action = this.mathService.tan;
        break;
      case 'log':
        action = this.mathService.log;
        break;
      case 'asin':
        action = this.mathService.asin;
        break;
      case 'acos':
        action = this.mathService.acos;
        break;
      case 'atan':
        action = this.mathService.atan;
        break;
      case 'ln':
        action = this.mathService.ln;
        break;
      case '1/x':
        action = this.mathService.dividedByOne;
        break;
      case '|x|':
        action = this.mathService.abs;
        break;
      case '10^x':
        action = this.mathService.pow10;
        break;
      case '+/-':
        action = this.mathService.invert;
        break;
      case 'π':
        action = this.mathService.getPi;
        break;
      case 'e':
        action = this.mathService.getE;
        break;
      case 'e^x':
        action = this.mathService.powOfE;
        break;
      case 'C':
        this.firstNum = 0;
        this.secondNum = 0;
        this.result = 0;
        return;
    }

    try {
      this.result = action(Number(this.firstNum), Number(this.secondNum));

      if(isNaN(this.result) || !isFinite(this.result))
        this.handleError('Something went wrong');
      else
        this.notifier.notify('success', 'Result is ' + this.result);
    }
    catch (err) {
      this.handleError(err);
    }
  }

  public handleError(message: string) {
    console.log('Error: ' + message);
    this.notifier.notify('error', message);
    this.result = 0;
  }

}
