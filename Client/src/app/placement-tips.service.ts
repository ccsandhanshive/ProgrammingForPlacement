import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {placementData} from "./placement-tips/placementTipsInterface"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlacementTipsService {
  private placementTipsUrl = 'http://localhost:3000/placementTips';
  constructor(private http: HttpClient) { }
  getPlacementTips(): Observable<placementData[]> {
    return this.http.get<placementData[]>(this.placementTipsUrl)
  }
}
