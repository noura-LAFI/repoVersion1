import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class FrontModule { }
