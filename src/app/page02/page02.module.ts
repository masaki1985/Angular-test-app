import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page02RoutingModule } from './page02-routing.module';
import { Page02Component } from "app/page02/page02.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    Page02Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    Page02RoutingModule,
  ]
})
export class Page02Module { }
