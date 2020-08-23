import { Component, OnInit } from '@angular/core';
import {Problem} from '../model/problem.model';
import {AddProblemStatementService} from '../shared/add-problem-statement.service';
import {ProblemStatementsService} from '../shared/problem-statements.service';
// import {Location} from '@angular/common';
@Component({
  selector: 'app-problem-statement-admin',
  templateUrl: './problem-statement-admin.component.html',
  styleUrls: ['./problem-statement-admin.component.css']
})
export class ProblemStatementAdminComponent  {

allProblem: Problem[];
allProblem1: Problem[];


constructor(public addProblemStatementService:AddProblemStatementService,public problemservice:ProblemStatementsService) { }

ngOnInit(): void {
  this.getAlldata();
}

getAlldata()
{
  this.addProblemStatementService.getAllProblem().subscribe(
    (data:Problem[]) =>{
      this.allProblem=data;
      console.log(this.allProblem)
      // this.allUsers.forEach(element => {
      // console.log(element.firstname);
        
      // });
    }
  )
  this.problemservice.getAllProblem().subscribe(
    (data:Problem[]) =>{
      this.allProblem1=data;
      console.log(this.allProblem)
      // this.allUsers.forEach(element => {
      // console.log(element.firstname);
        
      // });
    }
  )
}

delete(id:Number){
  console.log(id);
  this.addProblemStatementService.deleteProblem(id).subscribe(
    (data:Problem) =>{
      this.getAlldata();
      // console.log(this.allUsers)
    }
  )
}
delete_Problem(id:Number){
  console.log(id);
  this.problemservice.deleteProblem(id).subscribe(
    (data:Problem) =>{
      this.getAlldata();
      // console.log(this.allUsers)
    }
  )
}

show(prob){
  console.log(prob);
  this.addProblemStatementService.CurrentProblem=Object.assign({},prob);
  
}
edit(prob){
  console.log(prob);
  this.problemservice.CurrentProblem=Object.assign({},prob);
  
}

Approve(prob:Problem,del:Number){
  console.log('Create');
  
  var a:Number=Number(prob.id)+Math.random()*10;
  prob.id=100+Number(a);
  console.log(a);
  this.problemservice.createProblem(prob).subscribe();
  // this.problemservice.CurrentProblem.id=100;

  this.delete(del);
}

create(CurrentProblem:Problem)
{
  console.log(CurrentProblem);
  if(CurrentProblem.id!=null){
      console.log('Update'); 
      this.problemservice.UpdateProblem(CurrentProblem).subscribe();   
  }
  else{
      console.log('Create'); 
       this.problemservice.createProblem(CurrentProblem).subscribe();       
  }
  
}
}
