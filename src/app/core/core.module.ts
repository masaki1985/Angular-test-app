import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreService } from "./store.service";
import { CalcService } from "./calc.service";
import { CounterService } from "./counter.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [ ],
  providers: [
    CalcService,
    CounterService,
    StoreService,
  ],
})
export class CoreModule { }
