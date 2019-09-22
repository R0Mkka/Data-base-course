import { NgModule } from '@angular/core';

import { PageLayoutModule } from '@shared/page-layout/page-layout.module';
import { Lab5RoutingModule } from './lab5-routing.module';

import { Lab5Component } from './components/lab5/lab5.component';

@NgModule({
  imports: [
    PageLayoutModule,
    Lab5RoutingModule
  ],
  declarations: [
    Lab5Component
  ],
  exports: []
})
export class Lab5Module { }
