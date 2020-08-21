import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyDetailsComponent} from './company-details/company-details.component'
import { LoginComponent } from './login/login.component';
import { LogUpComponent } from './log-up/log-up.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  // {
  //   path:'',
  //   component:CompanyDetailsComponent  
  // },
  {
    path:'',
    component:AppComponent
    
  },
  {path:'login',component: LoginComponent},
  {path:'logup',component: LogUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
