import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab5Component } from './components/lab5/lab5.component';

const routes: Routes = [
  { path: '', component: Lab5Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab5RoutingModule { }
