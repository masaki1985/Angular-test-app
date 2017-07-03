import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  constructor() { }

  addTax(value): number {
    return value * 1.08;
  }
}
