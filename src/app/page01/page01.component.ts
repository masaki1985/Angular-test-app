import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from "@angular/router";

import { CalcService } from "./calc.service";
import { CounterService } from "./counter.service";

@Component({
  selector: 'page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})

export class Page01Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  value01 = 0;

  constructor(
    private router: Router,
    private calcService: CalcService,
    public counterService: CounterService) { 
      console.log("@@@constructor");
  }

  calc(): number {
    console.log("@@@calc");
    return this.calcService.addTax(this.value01);
  }

  ngOnInit() {
    console.log("@@@ngOnInit");
    this.counterService.counter++;
  }

 ngOnChanges(changes: SimpleChanges): void {
    // throw new Error("Method not implemented.");
  }

  ngDoCheck(): void {
    // throw new Error("Method not implemented.");
  }

  ngAfterContentInit(): void {
    // throw new Error("Method not implemented.");
  }

  ngAfterContentChecked(): void {
    // throw new Error("Method not implemented.");
  }

  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
  }

  ngAfterViewChecked(): void {
    // throw new Error("Method not implemented.");
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
  }

}
