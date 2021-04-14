import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksViewPageRoutingModule } from './tasks-view-page-routing.module';
import { TaskViewComponent } from './task-view/task-view.component';


@NgModule({
  declarations: [TaskViewComponent],
  imports: [
    CommonModule,
    TasksViewPageRoutingModule,
    FormsModule
  ]
})
export class TasksViewPageModule { }
