import { Component, OnInit } from '@angular/core';
import { ProblemStatementsService } from '../problem-statements.service';
@Component({
  selector: 'app-problem-statements',
  templateUrl: './problem-statements.component.html',
  styleUrls: ['./problem-statements.component.css']
})
export class ProblemStatementsComponent implements OnInit {

  constructor(private ProblemStatementsService:ProblemStatementsService) { }
  problems:any
  ngOnInit(): void {
    this.problems=this.getProblems()
  }
  getProblems(){
    return this.ProblemStatementsService.getProblems()
    .subscribe(
      problems => {
       console.log(this.problems);
       this.problems = problems
      }
     );
  }
}
