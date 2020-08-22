import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {WebinarData} from "../webinar-ads/webinarAdsInterface";
import {Webad} from "../model/webad.model"
const Headeroption={
  headers: new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class WebinarAdsService {
  private webadsUrl = 'http://localhost:3000/webads';
  // constructor(private http: HttpClient) { }
  getWebads(): Observable<WebinarData[]> {
    return this.http.get<WebinarData[]>(this.webadsUrl)
  }

  allWebads:Webad[];
  private WebadUrl = 'http://localhost:3000/Webad';

CurrentWebad:Webad ={
  id:null,
  topic:'',
  title:'',
  registerLink:'',
  price:'',
  information:'',
  imageURL:''
}

constructor( private http: HttpClient) { }
  
getAllProblem (): Observable<Webad[]> {
  return this.http.get<Webad[]>(this.WebadUrl,Headeroption)
}

deleteProblem(id:Number):Observable<Webad>{
  return this.http.delete<Webad>(this.WebadUrl+ '/' +id,Headeroption)
}
createProblem(web :Webad):Observable<Webad>
{
  return this.http.post<Webad>(this.WebadUrl,web,Headeroption);
}
UpdateProblem(web :Webad):Observable<Webad>
{
  return this.http.put<Webad>(this.WebadUrl+ '/' +web.id,web,Headeroption);
}
}
