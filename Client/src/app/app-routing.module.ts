import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProblemStatementsComponent} from './problem-statements/problem-statements.component'
import {PlacementImportantTopicsComponent} from './placement-important-topics/placement-important-topics.component'
import {PlacementTipsComponent} from './placement-tips/placement-tips.component'
import {CompanyInformationComponent} from './company-information/company-information.component'
import {WebinarAdsComponent} from './webinar-ads/webinar-ads.component'
import {LoginComponent} from './login/login.component'
import {AppComponent} from './app.component'
const routes: Routes = [
  // {
  //   path:'',
  //   component:CompanyDetailsComponent  
  // },
  {
    path:'ProblemStatementsComponent',
    component:ProblemStatementsComponent
  },
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
