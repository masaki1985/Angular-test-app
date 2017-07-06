import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "app/app.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: './page01/page01.module#Page01Module'
  },
  {
    path: 'page02',
    loadChildren: './page02/page02.module#Page02Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }