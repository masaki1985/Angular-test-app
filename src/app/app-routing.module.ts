import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "app/app.component";
import { Page01Component } from "app/page01/page01.component";
import { ChildComponent } from "app/page01/child/child.component";
import { Page02Component } from "app/page02/page02.component";

const routes: Routes = [
  {
    path: '',
    component: Page01Component
  },
  {
    path: 'page02',
    component: Page02Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }