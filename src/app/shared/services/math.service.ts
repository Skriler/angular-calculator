import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  // a - some number
  // b - some number

  constructor() { }

  public add(a: number, b: number): number {
    return a + b;
  }

  public subtract(a: number, b: number): number {
    return a - b;
  }

  public multiply(a: number, b: number): number {
    return a * b;
  }

  public divide(a: number, b: number): number {
    if (b == 0)
      throw("Attempt to divide by zero");

    return a / b;
  }

  public mod(a: number, b: number): number {
    if (b == 0)
      throw("Attempt to remainder of division by zero");

    return a % b;
  }

  public sqrt(a: number): number {
    return Math.sqrt(a);
  }

  public pow(a: number, b: number): number {
    return Math.pow(a, b);
  }

  public factorial(a: number): number {
    let result = 1;

    while(a) {
      result *= a--;
    }

    return result;
  }

  public sin(a: number): number {
    return Math.sin(a);
  }

  public cos(a: number): number {
    return Math.cos(a);
  }

  public tan(a: number): number {
    return Math.tan(a);
  }

  public log(a: number): number {
    return Math.log10(a);
  }

  public asin(a: number): number {
    return Math.asin(a)
  }

  public acos(a: number): number {
    return Math.acos(a)
  }

  public atan(a: number): number {
    return Math.atan(a)
  }

  public ln(a: number): number {
    return Math.log10(a) / Math.log10(Math.E);
  }

  public dividedByOne(a: number): number {
    return 1 / a;
  }

  public abs(a: number): number {
    return Math.abs(a);
  }

  public pow10(a: number): number {
    return Math.pow(10, a);
  }

  public invert(a: number): number {
    return -a;
  }

  public getPi(a: number): number {
    return Math.PI;
  }

  public getE(a: number): number {
    return Math.E;
  }

  public powOfE(a: number): number {
    return Math.pow(Math.E, a);
  }
}
