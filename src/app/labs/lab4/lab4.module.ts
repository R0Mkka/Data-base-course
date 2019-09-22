import { NgModule } from '@angular/core';

import { PageLayoutModule } from '@shared/page-layout/page-layout.module';
import { Lab4RoutingModule } from './lab4-routing.module';

import { Lab4Component } from './components/lab4/lab4.component';

@NgModule({
  imports: [
    PageLayoutModule,
    Lab4RoutingModule
  ],
  declarations: [
    Lab4Component
  ],
  exports: []
})
export class Lab4Module { }
