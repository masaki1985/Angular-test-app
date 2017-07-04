import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

import { StoreService } from "app/store.service";

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.css']
})
export class Page02Component implements OnInit {

  constructor(private storeService: StoreService) {
    console.log("@@@constructor");
  }

  //StoreServiceから保存データの読み込み
  readStore() {
    console.log("@@@readStore");
    return this.storeService.sharedDate;
  }

  ngOnInit() {
    console.log("@@@ngOnInit");
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
