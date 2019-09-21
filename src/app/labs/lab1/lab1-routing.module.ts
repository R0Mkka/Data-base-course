import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Lab1Component } from './components/lab1/lab1.component';
import { Task1Component } from './components/task1/task1.component';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component';
import { Task4Component } from './components/task4/task4.component';

const routes: Routes = [
  { path: '', component: Lab1Component },
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
  { path: 'task4', component: Task4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab1RoutingModule { }
