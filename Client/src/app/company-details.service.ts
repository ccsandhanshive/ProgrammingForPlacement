import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Company} from './company-details/companyInterface'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {
  private companyUrl = 'http://localhost:3000/companies';
  constructor( private http: HttpClient) { }
  
  getCompanies (): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl)
  }
}
