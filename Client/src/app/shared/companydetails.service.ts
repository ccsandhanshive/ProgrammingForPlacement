import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Company} from '../model/company.model'

const Headeroption={
  headers: new HttpHeaders({'content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CompanydetailsService {

  allCompany:Company[];
  private companyUrl = 'http://localhost:3000/Company';

CurrentCompany:Company ={
    id:null,
    imageUrl:'',
    companyName:'',
    package:null,
    passingYear:null,
    eligibalBranches:[''],
    jobDescription:[''],
    registrationLink:''
}

 constructor( private http: HttpClient) { }
  
  getAllCompanies (): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl,Headeroption)
  }

  deleteCompanies(id:Number):Observable<Company>{
    return this.http.delete<Company>(this.companyUrl+ '/' +id,Headeroption)
  }
  createCompanies(usr :Company):Observable<Company>
  {
    return this.http.post<Company>(this.companyUrl,usr,Headeroption);
  }
  UpdateCompanies(usr :Company):Observable<Company>
  {
    return this.http.put<Company>(this.companyUrl+ '/' +usr.id,usr,Headeroption);
  }
}
