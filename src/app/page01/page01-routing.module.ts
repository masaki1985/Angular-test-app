import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page01Component } from "app/page01/page01.component";

const routes: Routes = [
  {
    path: '',
    component: Page01Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page01RoutingModule { }
