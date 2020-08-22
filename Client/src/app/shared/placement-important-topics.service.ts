import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Topic} from '../model/topic.model';
const Headeroption={
  headers: new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PlacementImportantTopicsService {
  private companyUrl = 'http://localhost:3000/topics';
  // constructor( private http: HttpClient) { }
  
  getCompanies (): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.companyUrl)
  }

  allToppic:Topic[];
  private topicUrl = 'http://localhost:3000/Topic';

CurrentTopic:Topic ={
  id:null,
  topicName:'',
  topicLink:''
}

constructor( private http: HttpClient) { }
  
getAllTopic (): Observable<Topic[]> {
  return this.http.get<Topic[]>(this.topicUrl,Headeroption)
}

deleteTopic(id:Number):Observable<Topic>{
  return this.http.delete<Topic>(this.topicUrl+ '/' +id,Headeroption)
}
createTopic(usr :Topic):Observable<Topic>
{
  return this.http.post<Topic>(this.topicUrl,usr,Headeroption);
}
UpdateTopic(top :Topic):Observable<Topic>
{
  return this.http.put<Topic>(this.topicUrl+ '/' +top.id,top,Headeroption);
}
}
