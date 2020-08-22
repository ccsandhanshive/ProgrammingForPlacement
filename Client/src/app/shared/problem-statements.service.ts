import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
// import {Problem} from '../add-problem-statement/problemClass';
import {Problem} from '../model/problem.model'

const Headeroption={
  headers: new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ProblemStatementsService {
  private problemUrl = 'http://localhost:3000/problems';
  // constructor(private http: HttpClient) { }
  getProblems (): Observable<Problem[]> {
    return this.http.get<Problem[]>(this.problemUrl)
  }
  allProblems:Problem[];
  private ProblemUrl = 'http://localhost:3000/Problem';

CurrentProblem:Problem ={
  id:null,
  problemTitle:'',
  problemStatement:'',
  input:'',
  output:'',
  program:'',
  language:'',
  description:''
}

constructor( private http: HttpClient) { }
  
getAllProblem (): Observable<Problem[]> {
  return this.http.get<Problem[]>(this.ProblemUrl,Headeroption)
}

deleteProblem(id:Number):Observable<Problem>{
  return this.http.delete<Problem>(this.ProblemUrl+ '/' +id,Headeroption)
}
createProblem(usr :Problem):Observable<Problem>
{
  return this.http.post<Problem>(this.ProblemUrl,usr,Headeroption);
}
UpdateProblem(Tips :Problem):Observable<Problem>
{
  return this.http.put<Problem>(this.ProblemUrl+ '/' +Tips.id,Tips,Headeroption);
}
}
