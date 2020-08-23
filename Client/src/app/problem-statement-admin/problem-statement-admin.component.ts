import { Component, OnInit } from '@angular/core';
import {Problem} from '../model/problem.model'
// import {AddProblemStatementService} from '../shared/add-problem-statement.service'
import {ProblemStatementsService} from '../shared/problem-statements.service'
import {Location} from '@angular/common'
@Component({
  selector: 'app-problem-statement-admin',
  templateUrl: './problem-statement-admin.component.html',
  styleUrls: ['./problem-statement-admin.component.css']
})
export class ProblemStatementAdminComponent  {

allProblem: Problem[];
showEdit:Boolean
constructor(public problemservice:ProblemStatementsService) { }

ngOnInit(): void {
  this.getAlldata();
  this.showEdit=false
}
setShowEditTrue
getAlldata()
{
  this.problemservice.getAllProblem().subscribe(
    (data:Problem[]) =>{
      this.allProblem=data;
      console.log(this.allProblem)
      // this.allUsers.forEach(element => {
      // console.log(element.firstname);
        
      // });
    }
  )
}

delete(id:Number){
  console.log(id);
  this.problemservice.deleteProblem(id).subscribe(
    (data:Problem) =>{
      this.getAlldata();
      // console.log(this.allUsers)
    }
  )
}

edit(usr){
  console.log(usr);
  this.problemservice.CurrentProblem=Object.assign({},usr);
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
