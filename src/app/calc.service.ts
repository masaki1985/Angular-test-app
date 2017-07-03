import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable()
export class CalcService {

  constructor(private storeService: StoreService) {
    console.log("@@@constructor");
  }

  //消費税加算計算と保存
  addTax(num: number) {
    console.log("@@@addTax");
    num *= 1.08;

    //StoreServiceを使って税込金額を保存
    this.storeService.writeStore(num);
    return num;
  }
}
