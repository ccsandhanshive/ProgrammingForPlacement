import { Component, OnInit } from '@angular/core';
import {Problem} from './problemClass'
import {AddProblemStatementService} from '../add-problem-statement.service'
import {Location} from '@angular/common'
@Component({
  selector: 'app-add-problem-statement',
  templateUrl: './add-problem-statement.component.html',
  styleUrls: ['./add-problem-statement.component.css']
})
export class AddProblemStatementComponent{
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
   this.AddProblemStatementService.addProblem(this.problem).subscribe();
 }
}

