import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { Page01Component } from './page01/page01.component';
import { ChildComponent } from './page01/child/child.component';
import { CalcService } from "app/page01/calc.service";
import { CounterService } from "app/page01/counter.service";
import { AppRoutingModule } from "app/app-routing.module";


@NgModule({
  //このアプリで利用するクラス
  declarations: [
    AppComponent,
    Page01Component,
    ChildComponent
  ],
  //このアプリで利用するモジュール
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  //DI元となるクラス
  providers: [
    CalcService,
    CounterService,
  ],
  //最初に起動するコンポーネント
  bootstrap: [AppComponent]
})
export class AppModule { }
