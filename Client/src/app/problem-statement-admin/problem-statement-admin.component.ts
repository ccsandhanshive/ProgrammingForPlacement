import { Component, OnInit } from '@angular/core';
import {Problem} from '../model/problem.model'
import {AddProblemStatementService} from '../shared/add-problem-statement.service'
import {Location} from '@angular/common'
@Component({
  selector: 'app-problem-statement-admin',
  templateUrl: './problem-statement-admin.component.html',
  styleUrls: ['./problem-statement-admin.component.css']
})
export class ProblemStatementAdminComponent  {
  problem=new Problem();
  submitted=false;
  constructor(private AddProblemStatementService:AddProblemStatementService,
              private location:Location) {
  }
  newProblem():void{
    this.submitted=false
    this.problem=new Problem();
  }
  addProblem(){
    this.submitted=true
    this.save();
  }
 save(){
   console.log(this.problem);
 //  this.AddProblemStatementService.addProblem(this.problem).subscribe();
 }
}
