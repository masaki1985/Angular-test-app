import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page01RoutingModule } from './page01-routing.module';
import { Page01Component } from "app/page01/page01.component";
import { ChildComponent } from "app/page01/child/child.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    Page01Component,
    ChildComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Page01RoutingModule,
  ]
})
export class Page01Module { }
