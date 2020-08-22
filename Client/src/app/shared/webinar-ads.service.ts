import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {WebinarData} from "../webinar-ads/webinarAdsInterface"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class WebinarAdsService {
  private webadsUrl = 'http://localhost:3000/webads';
  constructor(private http: HttpClient) { }
  getWebads(): Observable<WebinarData[]> {
    return this.http.get<WebinarData[]>(this.webadsUrl)
  }
}
