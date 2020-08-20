import { Component, OnInit } from '@angular/core';
import { ProblemStatementsService } from '../problem-statements.service';
@Component({
  selector: 'app-problem-statements',
  templateUrl: './problem-statements.component.html',
  styleUrls: ['./problem-statements.component.css']
})
export class ProblemStatementsComponent implements OnInit {

  constructor(private ProblemStatementsService:ProblemStatementsService) { }
  problems:any=[]
  problem:any
  id:1
  Ava=false

  setId(id){
    this.id=id
    this.setProblem()
  }
  ngOnInit(): void {
    this.Ava=false
    this.problems=this.getProblems()
    console.log(this.problem)
  
    
  }
  tempProblem:any
  setProblem(){
    for(let p of this.problems){
      if(p.problemId==this.id){
        this.problem=p
        this.Ava=true
      }
    }
  }
  getProblems(){
    return this.ProblemStatementsService.getProblems()
    .subscribe(
      problems => this.problems = problems
       );
  }

 /* setProblemDetails(object){
    this.problem=object.problem
    this.compilarLink=object.compilarLink
    this.problemVisibility=true
  }*/
}
