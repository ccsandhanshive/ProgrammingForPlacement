import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyDetailsComponent} from './company-details/company-details.component'
import { LoginComponent } from './login/login.component';
import { LogUpComponent } from './log-up/log-up.component';
import { AppComponent } from './app.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {ProblemStatementsComponent} from './problem-statements/problem-statements.component'
import {PlacementImportantTopicsComponent} from './placement-important-topics/placement-important-topics.component'
import {PlacementTipsComponent} from './placement-tips/placement-tips.component'
import {CompanyInformationComponent} from './company-information/company-information.component'
import {WebinarAdsComponent} from './webinar-ads/webinar-ads.component'

const routes: Routes = [
  // {
  //   path:'',
  //   component:CompanyDetailsComponent  
  // },
  {
    path:'ProblemStatementsComponent',
    component:ProblemStatementsComponent
  },
  // {path:'login',component: LoginComponent},
  {path:'logup',component: LogUpComponent},
  {path:'forgetpass',component: ForgetPasswordComponent},
  {path:'userlist',component: RegisterUserComponent },
  {
    path:'PlacementImportantTopicsComponent',
    component:PlacementImportantTopicsComponent
  },
  {
    path:'PlacementTipsComponent',
    component:PlacementTipsComponent
  },
  {
    path:'CompanyInformationComponent',
    component:CompanyInformationComponent
  },
  {
    path:'WebinarAdsComponent',
    component:WebinarAdsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
