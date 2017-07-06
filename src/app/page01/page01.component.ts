import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from "@angular/router";

import { CalcService } from "app/core/calc.service";
import { CounterService } from "app/core/counter.service";

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
    public  counterService: CounterService) { 
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
    console.log("@@@ngOnChanges");
  }

  ngDoCheck(): void {
    console.log("@@@ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("@@@ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("@@@ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("@@@ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("@@@ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("@@@ngOnDestroy");
  }

}
