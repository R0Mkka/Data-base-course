import { NgModule } from '@angular/core';

import { Lab1RoutingModule } from './lab1-routing.module';

import { Lab1Component } from './components/lab1/lab1.component';

@NgModule({
  imports: [
    Lab1RoutingModule
  ],
  declarations: [
    Lab1Component
  ],
  exports: []
})
export class Lab1Module { }
