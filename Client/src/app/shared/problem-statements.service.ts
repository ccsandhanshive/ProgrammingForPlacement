import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Problem} from '../add-problem-statement/problemClass'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProblemStatementsService {
  private problemUrl = 'http://localhost:3000/problems';
  constructor(private http: HttpClient) { }
  getProblems (): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.problemUrl)
  }
}
