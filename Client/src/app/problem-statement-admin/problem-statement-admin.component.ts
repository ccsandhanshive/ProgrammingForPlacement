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
constructor(public problemStatementsService:ProblemStatementsService) { }

ngOnInit(): void {
  this.getAlldata();
  this.showEdit=false
}
setShowEditTrue(){
  this.showEdit=true
}
getAlldata()
{
  this.problemStatementsService.getAllProblem().subscribe(
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
  this.problemStatementsService.deleteProblem(id).subscribe(
    (data:Problem) =>{
      this.getAlldata();
      // console.log(this.allUsers)
    }
  )
}

edit(usr){
  console.log(usr);
  this.problemStatementsService.CurrentProblem=Object.assign({},usr);
  this.showEdit=true
}

create(CurrentProblem:Problem)
{
  console.log(CurrentProblem);
  if(CurrentProblem.id!=null){
      console.log('Update'); 
      this.problemStatementsService.UpdateProblem(CurrentProblem).subscribe();   
  }
  else{
      console.log('Create'); 
       this.problemStatementsService.createProblem(CurrentProblem).subscribe();       
  }
  
}
}
