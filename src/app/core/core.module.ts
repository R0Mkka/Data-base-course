import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { LeftBarComponent } from '../components/left-bar/left-bar.component';
import { ListItemComponent } from '../components/list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  declarations: [
    LeftBarComponent,
    ListItemComponent
  ],
  exports: [
    LeftBarComponent,
    MatIconModule
  ]
})
export class CoreModule { }
