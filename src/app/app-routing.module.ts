import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './dashboard/home1/home1.component';
import { AboutComponent } from './front/about/about.component';
import { ContactComponent } from './front/contact/contact.component';
import { HomeComponent } from './front/home/home.component';
import { AccountComponent } from './front/account/account.component';
const routes: Routes = [

{path:'',component:HomeComponent},
{path:'contact', component:ContactComponent},
{path:'about' , component:AboutComponent},
{path:'home1' , component:Home1Component},
{path:'account' , component:AccountComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
