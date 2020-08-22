import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyDetailsComponent} from './company-details/company-details.component'
import { LoginComponent } from './login/login.component';
import { LogUpComponent } from './log-up/log-up.component';
import { AppComponent } from './app.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';
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
  {path:'logup',component: LogUpComponent},
  {path:'forgetpass',component: ForgetPasswordComponent},
  {path:'userlist',component: RegisterUserComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
