import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  
  //画面間共通のデータ
  sharedDate = 0;

  constructor() {
    console.log("@@@constructor");
  }

  //受け取った値を保存
  writeStore(num: number) {
    console.log("@@@weriteStore");
    this.sharedDate = num;
  }

  //保存した値を読み取り
  readStroe(): number {
    console.log("@@@readStore");
    return this.sharedDate;
  }
}
