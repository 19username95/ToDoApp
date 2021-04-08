import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule
  ]
})
export class NotFoundPageModule { }
