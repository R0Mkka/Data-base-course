import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageLayoutModule } from '@shared/page-layout/page-layout.module';
import { InputFieldModule } from '@shared/input-field/input-field.module';
import { Lab1RoutingModule } from './lab1-routing.module';

import { Lab1Component } from './components/lab1/lab1.component';
import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component';
import { Task4Component } from './components/task4/task4.component';
import { Task5Component } from './components/task5/task5.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageLayoutModule,
    InputFieldModule,
    Lab1RoutingModule
  ],
  declarations: [
    Lab1Component,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component
  ],
  exports: []
})
export class Lab1Module { }
