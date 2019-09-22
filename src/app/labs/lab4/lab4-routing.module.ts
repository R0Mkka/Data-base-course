import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab4Component } from './components/lab4/lab4.component';

const routes: Routes = [
  { path: '', component: Lab4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab4RoutingModule { }
