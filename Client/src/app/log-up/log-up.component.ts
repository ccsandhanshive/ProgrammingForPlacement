import { Component, OnInit } from '@angular/core';

import { NgForm  } from '@angular/forms';
import { LogUpService} from './log-up.service';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})
export class LogUpComponent implements OnInit {
  firstname:String="";
  lastname:String="";
  email:String="";
  pswrepeat:String="";
  psw:String="";
  // loadComponent:Boolean=false;
  
 
  constructor( private service:LogUpService) { }

  ngOnInit(): void {
  }

  lgbtnclick() {
    // this.service.registerdata()
    var person = { 
      a:this.firstname,
      b:this.lastname,
      c:this.email,
      d:this.psw,
      e:this.pswrepeat
      
   }; 
   alert(person.a +" " +person.b +" " +person.c +" " +person.d +" " +person.e);
  } 

  // signinclick(){
    
  //   loadComponent:true;
  //   console.log("ok");

  // }
  

}
// export interface Customerinterface{

//   user:String;
//   role:String;

// }
