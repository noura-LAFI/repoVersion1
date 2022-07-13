import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1/home1.component';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule } from '@angular/material/input';
import {MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    Home1Component,
    
  ],
  imports: [
    CommonModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatListModule,
  ]
})
export class DashboardModule { }
