import { Component } from '@angular/core';

@Component({
  //HTMLの出力先として<app-root>を指定
  selector: 'app-root',

  //HTMLテンプレートファイルの指定
  templateUrl: './app.component.html',

  //スタイルシートファイルの指定
  styleUrls: ['./app.component.css']
})

//componentクラスの定義
export class AppComponent {

  //変数titleの宣言と値の代入
  title = 'こんにちは';
}
