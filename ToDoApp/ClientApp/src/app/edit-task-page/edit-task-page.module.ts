import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditTaskPageRoutingModule } from './edit-task-page-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
  declarations: [EditTaskComponent],
  imports: [
    CommonModule,
    EditTaskPageRoutingModule,
    FormsModule
  ]
})
export class EditTaskPageModule { }
