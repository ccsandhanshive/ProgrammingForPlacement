import { Component, OnInit } from '@angular/core';
import {Problem1} from './problemClass'
import {AddProblemStatementService} from '../shared/add-problem-statement.service'
import {Router} from '@angular/router';
import {Problem} from '../model/problem.model'
// import {AddProblemStatementService} from '../shared/add-problem-statement.service'

@Component({
  selector: 'app-add-problem-statement',
  templateUrl: './add-problem-statement.component.html',
  styleUrls: ['./add-problem-statement.component.css']
})
export class AddProblemStatementComponent{
  problem1=new Problem1();
  submitted=false;
  constructor(public addProblemStatementService:AddProblemStatementService,
              private router:Router) {
  }
//   newProblem():void{
//     this.submitted=false
//     this.problem=new Problem1();
//   }
//   addProblem(){
//     this.submitted=true
//     this.save();
//   }
//  save(){
//    console.log(this.problem);
//   //  this.AddProblemStatementService.addProblem(this.problem).subscribe();
//  }
create(CurrentProblem:Problem)
{
  // console.log(CurrentProblem);
  // if(CurrentProblem.id!=null){
  //     console.log('Update'); 
  //     this.addProblemStatementService.UpdateProblem(CurrentProblem).subscribe();   
  // }
  // else{
      console.log('Create'); 
       this.addProblemStatementService.createProblem(CurrentProblem).subscribe();       
  // }
  
}

}

