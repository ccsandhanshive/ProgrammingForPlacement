import { Component, OnInit } from '@angular/core';
import {CompanyDetailsService} from '../company-details.service'
@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css']
})
export class CompanyInformationComponent implements OnInit {

  companies:any
  constructor(private CompanyDetailsService:CompanyDetailsService) { }

  ngOnInit(): void {
    this.companies=this.getCompanies();
  }
  company:any
  available=false
  getCompanyDetails(companyObject){
    this.company=companyObject
    this.available=true
  }
  getCompanies(){
    return this.CompanyDetailsService.getCompanies()
    .subscribe(
      companies => {
       console.log(this.companies);
       this.companies = companies
      }
     );
  }
}
