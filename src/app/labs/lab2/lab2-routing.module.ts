import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab2Component } from './components/lab2/lab2.component';

const routes: Routes = [
  { path: '', component: Lab2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab2RoutingModule { }
