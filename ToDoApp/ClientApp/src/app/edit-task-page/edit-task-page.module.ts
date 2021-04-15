import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditTaskPageRoutingModule } from './edit-task-page-routing.module';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EditTaskComponent],
  imports: [
    CommonModule,
    EditTaskPageRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EditTaskPageModule { }
