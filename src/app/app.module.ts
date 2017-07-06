import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { CoreModule } from "app/core/core.module";


@NgModule({
  //このアプリで利用するクラス
  declarations: [
    AppComponent,
  ],
  //このアプリで利用するモジュール
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  //このモジュールが呼び出されたときに利用できるモジュール
  exports: [
    CoreModule
  ],
  //DI元となるクラス
  providers: [ ],
  //最初に起動するコンポーネント
  bootstrap: [AppComponent]
})
export class AppModule { }
