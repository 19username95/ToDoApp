import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationPageRoutingModule } from './navigation-page-routing.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    NavigationPageRoutingModule
  ]
})
export class NavigationPageModule { }
