import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule, MatIconModule } from '@angular/material';

import { InputFieldComponent } from './input-field.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule
  ],
  declarations: [
    InputFieldComponent
  ],
  exports: [
    InputFieldComponent
  ]
})
export class InputFieldModule { }
