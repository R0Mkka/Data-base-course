import { NgModule } from '@angular/core';

import { PageLayoutModule } from '@shared/page-layout/page-layout.module';
import { Lab2RoutingModule } from './lab2-routing.module';

import { Lab2Component } from './components/lab2/lab2.component';

@NgModule({
  imports: [
    PageLayoutModule,
    Lab2RoutingModule
  ],
  declarations: [
    Lab2Component
  ],
  exports: []
})
export class Lab2Module { }
