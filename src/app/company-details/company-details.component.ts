import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Company} from "./companyInterface"
import {companies} from "./companyMockData"

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
companies=companies
  constructor() { }

  ngOnInit(): void {
  }
  @Input() id:number;    //Comes from company-information-component
  @Output() company=new EventEmitter<Company>();   //goes to company-information-component
  companyObject:any
  public getCompanyDetails(){
  // this.companyObject=companies.find(this.findCompany,[this.id])
  for(let c of companies){
    if(c.companyId==this.id){
      this.companyObject=c
      break
    }
  }
   this.company.emit(this.companyObject)
   console.log(this.companyObject)
 }

 findCompany(c){
  return c.companyId=this[0]
}
}
