import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page01Component } from './page01/page01.component';

@NgModule({
  //このアプリで利用するクラス
  declarations: [
    AppComponent,
    Page01Component
  ],
  //このアプリで利用するモジュール
  imports: [
    BrowserModule
  ],
  //DI元となるクラス
  providers: [],
  //最初に起動するコンポーネント
  bootstrap: [AppComponent]
})
export class AppModule { }
