import { AuthGuard } from './../../shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';


const routes = [
  {
      path: 'todo-list',
      component: TodoListComponent,
      canActivate:[AuthGuard],
      children: [
          {
              path: '',
              component: TodoListComponent
          },
          {
              path: '**',
              redirectTo: '',
              pathMatch: 'full'
          }
      ]
  }
];


@NgModule({
  declarations: [
    TodoListComponent,
    ListTableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule


  ],
  exports: [
    TodoListComponent,
    ListTableComponent

  ]


})
export class ToDoListModule { }
