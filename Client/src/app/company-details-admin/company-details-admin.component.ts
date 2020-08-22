import { Component, OnInit } from '@angular/core';
// import { UsersService } from '../shared/users.service';
import {CompanydetailsService} from '../shared/companydetails.service'
// import { Users } from '../model/users.model';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-company-details-admin',
  templateUrl: './company-details-admin.component.html',
  styleUrls: ['./company-details-admin.component.css']
})
export class CompanyDetailsAdminComponent implements OnInit {
  allCompany: Company[];

  constructor(public companyService:CompanydetailsService) { }

  ngOnInit(): void {
    this.getAlldata();
  }

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

  delete(id:Number){
    console.log(id);
    this.companyService.deleteCompanies(id).subscribe(
      (data:Company) =>{
        this.getAlldata();
        // console.log(this.allUsers)
      }
    )
  }

  edit(usr){
    console.log(usr);
    this.companyService.CurrentCompany=Object.assign({},usr);
  }

  create(CurrentCompany:Company)
  {
    console.log(CurrentCompany);
    if(CurrentCompany.id!=null){
        console.log('Update'); 
        this.companyService.UpdateCompanies(CurrentCompany).subscribe();   
    }
    else{
        console.log('Create'); 
         this.companyService.createCompanies(CurrentCompany).subscribe();       
    }
    
  }

}
 