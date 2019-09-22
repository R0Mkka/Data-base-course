import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatIconModule } from '@angular/material';

import { PageLayoutModule } from '@shared/page-layout/page-layout.module';
import { InputFieldModule } from '@shared/input-field/input-field.module';
import { CustomSelectFieldModule } from '@shared/custom-select-field/custom-select-field.module';
import { Lab3RoutingModule } from './lab3-routing.module';

import { Lab3Component } from './components/lab3/lab3.component';
import { NewUserDialogComponent } from './components/new-user-dialog/new-user-dialog.component';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    PageLayoutModule,
    InputFieldModule,
    CustomSelectFieldModule,
    Lab3RoutingModule
  ],
  declarations: [
    Lab3Component,
    NewUserDialogComponent,
    EditUserDialogComponent
  ],
  entryComponents: [
    NewUserDialogComponent,
    EditUserDialogComponent
  ],
  exports: []
})
export class Lab3Module { }
