import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddTaskPageRoutingModule } from './add-task-page-routing.module';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [AddTaskComponent],
  imports: [
    CommonModule,
    AddTaskPageRoutingModule,
    FormsModule
  ]
})
export class AddTaskPageModule { }
