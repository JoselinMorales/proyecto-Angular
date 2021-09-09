import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task-routing/task-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DecoradorhashPipe } from '../decoradorhash.pipe'; 

@NgModule({
  declarations: [TaskFormComponent, TaskListComponent, DecoradorhashPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TaskRoutingModule,
    HttpClientModule
  ]
})
export class TaskModule { }
