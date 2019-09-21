import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab1Component } from './components/lab1/lab1.component';

const routes: Routes = [
  { path: '', component: Lab1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab1RoutingModule { }
