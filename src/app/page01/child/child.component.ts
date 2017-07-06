import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() childValue: number;

  constructor() {
    console.log("@@@constructor");
  }

  getNow() {
    console.log("@@@getNow");
    return (new Date()).toLocaleTimeString();
  }

  format(): string {
    console.log("@@@format");
    return "¥¥" + String(this.childValue) + "-";
  }

  ngOnChanges(): void {
    console.log("@@@ngOnChanges");
  }

}
