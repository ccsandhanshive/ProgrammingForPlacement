import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PlacementTips} from '../model/placementTips.model'
import {placementData} from "../placement-tips/placementTipsInterface"
const Headeroption={
  headers: new HttpHeaders({'content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PlacementTipsService {
  private placementTipsUrl = 'http://localhost:3000/placementTips';
  // constructor(private http: HttpClient) { }
  getPlacementTips(): Observable<placementData[]> {
    return this.http.get<placementData[]>(this.placementTipsUrl)
  }
  allTips:PlacementTips[];
  private companyUrl = 'http://localhost:3000/PlacementTips';

CurrenttTip:PlacementTips ={
  id:null,
  index:false,
  heading:'',
  information:''
}

constructor( private http: HttpClient) { }
  
getAllTips (): Observable<PlacementTips[]> {
  return this.http.get<PlacementTips[]>(this.companyUrl,Headeroption)
}

deleteTips(id:Number):Observable<PlacementTips>{
  return this.http.delete<PlacementTips>(this.companyUrl+ '/' +id,Headeroption)
}
createTips(usr :PlacementTips):Observable<PlacementTips>
{
  return this.http.post<PlacementTips>(this.companyUrl,usr,Headeroption);
}
UpdateTips(Tips :PlacementTips):Observable<PlacementTips>
{
  return this.http.put<PlacementTips>(this.companyUrl+ '/' +Tips.id,Tips,Headeroption);
}
}
