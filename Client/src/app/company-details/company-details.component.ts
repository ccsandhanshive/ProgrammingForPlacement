import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Company} from "./companyInterface"
import {CompanyDetailsService} from '../shared/company-details.service'

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
companies:any
  constructor(private CompanyDetailsService:CompanyDetailsService) { }

  ngOnInit(): void {
    this.companies=this.getCompanies();
  }

  @Input() id:number;    //Comes from company-information-component
  @Output() company=new EventEmitter<Company>();   //goes to company-information-component
  companyObject:any
  public getCompanyDetails(){
  // this.companyObject=companies.find(this.findCompany,[this.id])
  console.log(this.companies)
  console.log(typeof(this.companies))
  for(let c of this.companies){
    if(c.companyId==this.id){
      this.companyObject=c
      break
    }
  }
   this.company.emit(this.companyObject)
   console.log(this.companyObject)
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
