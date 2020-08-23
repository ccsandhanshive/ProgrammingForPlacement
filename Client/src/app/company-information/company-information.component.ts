import { Component, OnInit } from '@angular/core';
// import {CompanyDetailsService} from '../shared/company-details.service'
import {CompanydetailsService} from '../shared/companydetails.service'
// import { Users } from '../model/users.model';
import { Company } from '../model/company.model';
@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css']
})
export class CompanyInformationComponent implements OnInit {

  // companies:any
  allCompany: Company[];
  constructor(public companyService:CompanydetailsService) { }
  available=false
  ngOnInit(): void {
    // this.companies=this.getCompanies();
    this.getAlldata();
  }
  // company:any
 
  // getCompanyDetails(companyObject){
  //   this.allCompany=companyObject
  //   this.available=true
  // }
  // getCompanies(){
  //   return this.CompanyDetailsService.getCompanies()
  //   .subscribe(
  //     companies => {
  //      console.log(this.companies);
  //      this.companies = companies
  //     }
  //    );
  // }
  getAlldata()
  {
    this.companyService.getAllCompanies().subscribe(
      (data:Company[]) =>{
        this.allCompany=data;
        console.log(this.allCompany)
        // this.allUsers.forEach(element => {
        // console.log(element.firstname);
          
        // });
      }
    )
  }
  edit(usr){
    console.log(usr);
    this.available=true;
    this.companyService.CurrentCompany=Object.assign({},usr);
  }
}
