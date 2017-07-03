import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

import { CalcService } from "./calc.service";
import { CounterService } from "./counter.service";

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})

export class Page01Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  value01 = 0;

  constructor(
    private calcService: CalcService,
    private CounterService: CounterService) { 
      console.log("@@@constructor");
  }

  calc(): number {
    console.log("@@@calc");
    return this.calcService.addTax(this.value01);
  }
  ngOnInit() {
    console.log("@@@ngOnInit");
    this.CounterService.counter++;
  }

  ngOnChanges(): void {
    throw new Error("Method not implemented.");
  }

  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }

  ngAfterContentInit(): void {
    throw new Error("Method not implemented.");
  }

  ngAfterContentChecked(): void {
    throw new Error("Method not implemented.");
  }

  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  ngAfterViewChecked(): void {
    throw new Error("Method not implemented.");
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

}
