import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemStatementsComponent } from './problem-statements/problem-statements.component';
import { ProgrammingWindowComponent } from './programming-window/programming-window.component';
import { AddProblemStatementComponent } from './add-problem-statement/add-problem-statement.component';
import { LoginComponent } from './login/login.component';
import { LogUpComponent } from './log-up/log-up.component';
import { PlacementTipsComponent } from './placement-tips/placement-tips.component';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { WebinarAdsComponent } from './webinar-ads/webinar-ads.component';
import { PlacementImportantTopicsComponent } from './placement-important-topics/placement-important-topics.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemStatementsComponent,
    ProgrammingWindowComponent,
    AddProblemStatementComponent,
    LoginComponent,
    LogUpComponent,
    PlacementTipsComponent,
    CompanyInformationComponent,
    CompanyDetailsComponent,
    WebinarAdsComponent,
    PlacementImportantTopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
