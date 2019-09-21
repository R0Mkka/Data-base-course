import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { LeftBarComponent } from '../components/left-bar/left-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  declarations: [
    LeftBarComponent
  ],
  exports: [
    LeftBarComponent,
    MatIconModule
  ]
})
export class CoreModule { }
