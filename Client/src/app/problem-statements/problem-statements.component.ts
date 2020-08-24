import { Component, OnInit } from '@angular/core';
import { ProblemStatementsService } from '../shared/problem-statements.service';
import {Problem} from '../model/problem.model';

@Component({
  selector: 'app-problem-statements',
  templateUrl: './problem-statements.component.html',
  styleUrls: ['./problem-statements.component.css']
})
export class ProblemStatementsComponent implements OnInit {
  //allProblem: Problem[];
  constructor(private ProblemStatementsService:ProblemStatementsService) { }
   problems:Problem[]
   problem:any
   id:0
   Ava=false

   setId(id){
     this.id=id
     this.setProblem()
   }
  ngOnInit(): void {
    // this.Ava=false
    // this.problems=this.getProblems()
    // console.log(this.problem)
    this.getAlldata();
  
    
  }

  getAlldata()
{
  this.ProblemStatementsService.getAllProblem().subscribe(
    (data:Problem[]) =>{
      this.problems=data;
    //  console.log(this.allProblem)
      // this.allUsers.forEach(element => {
      // console.log(element.firstname);
        
      // });
    }
  )
}
   tempProblem:any
  setProblem(){
     for(let p of this.problems){
       if(p.id==this.id){
         this.problem=p
         this.Ava=true
       }
     }
   }
  // getProblems(){
  //   return this.ProblemStatementsService.getProblems()
  //   .subscribe(
  //     problems => this.problems = problems
  //      );
  // }

 /* setProblemDetails(object){
    this.problem=object.problem
    this.compilarLink=object.compilarLink
    this.problemVisibility=true
  }*/
}
