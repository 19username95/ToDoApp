import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { TaskManagerFormComponent } from './task-manager-form/task-manager-form.component';

@NgModule({
  declarations: [TaskManagerFormComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ],
  exports: [TaskManagerFormComponent]
})
export class SharedModule { }
