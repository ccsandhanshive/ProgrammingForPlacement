import { Component, OnInit } from '@angular/core';
import {companies} from "../company-details/companyMockData"
@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css']
})
export class CompanyInformationComponent implements OnInit {

  constructor() { }
  companies:any
  ngOnInit(): void {
    this.companies=companies
  }
  
  company:any
  available=false
  getCompanyDetails(companyObject){
    this.company=companyObject
    this.available=true
  }
}
