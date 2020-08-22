import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
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
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import {UsersService} from './shared/users.service';
import { CompanyDetailsAdminComponent } from './company-details-admin/company-details-admin.component';
import { PlacementImportantTopicsAdminComponent } from './placement-important-topics-admin/placement-important-topics-admin.component';
import { PlacementTipsAdminComponent } from './placement-tips-admin/placement-tips-admin.component';
import { WebinarAdsAdminComponent } from './webinar-ads-admin/webinar-ads-admin.component';
import { ProblemStatementAdminComponent } from './problem-statement-admin/problem-statement-admin.component'
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
    PlacementImportantTopicsComponent,
    RegisterUserComponent,
    CompanyDetailsAdminComponent,
    PlacementImportantTopicsAdminComponent,
    PlacementTipsAdminComponent,
    WebinarAdsAdminComponent,
    ProblemStatementAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
