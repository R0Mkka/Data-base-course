import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lab1',
    loadChildren: () => import('./labs/lab1/lab1.module').then(m => m.Lab1Module)
  },
  {
    path: 'lab2',
    loadChildren: () => import('./labs/lab2/lab2.module').then(m => m.Lab2Module)
  },
  {
    path: 'lab3',
    loadChildren: () => import('./labs/lab3/lab3.module').then(m => m.Lab3Module)
  },
  {
    path: 'lab4',
    loadChildren: () => import('./labs/lab4/lab4.module').then(m => m.Lab4Module)
  },
  {
    path: 'lab5',
    loadChildren: () => import('./labs/lab5/lab5.module').then(m => m.Lab5Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
