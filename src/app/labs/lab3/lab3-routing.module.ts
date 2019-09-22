import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab3Component } from './components/lab3/lab3.component';

const routes: Routes = [
  { path: '', component: Lab3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab3RoutingModule { }
