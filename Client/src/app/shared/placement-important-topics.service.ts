import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Topic} from '../placement-important-topics/placementTopicsInterface'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlacementImportantTopicsService {
  private companyUrl = 'http://localhost:3000/topics';
  constructor( private http: HttpClient) { }
  
  getCompanies (): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.companyUrl)
  }
}
