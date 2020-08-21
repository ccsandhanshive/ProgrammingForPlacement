import { Component, OnInit } from '@angular/core';

import { NgForm ,FormsModule } from '@angular/forms';
// import { LogUpService} from './log-up.service';
import { UsersService } from '../shared/users.service';
import { Users } from '../model/users.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})

export class LogUpComponent implements OnInit {
loadlogin:boolean
  
 
constructor( public service:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.loadlogin=true;
  } 

  createUser(currentUser:Users)
  {
    console.log(currentUser);
    if(currentUser.id!=null){
      console.log('Update'); 
      this.UpdateUsr(currentUser);
    }
    else{
      console.log('create');
      this.createUsr(currentUser);   
    }
    
  }
  createUsr(usr :Users)
  {
    this.service.createUsr(usr).subscribe();
  }
  UpdateUsr(usr:Users){
    this.service.UpdateUsr(usr).subscribe();
  }

  gotologin(){
    this.router.navigate(['/login']);
    this.loadlogin=false;
  }
} 

// export interface Customerinterface{

//   user:String;
//   role:String;

// }
// export class LogUpComponent implements OnInit {
//   firstname:String="";
//   lastname:String="";
//   email:String="";
//   pswrepeat:String="";
//   psw:String="";
//   // loadComponent:Boolean=false;
  
 
//   constructor( private service:LogUpService) { }

//   ngOnInit(): void {
//   }

//   lgbtnclick() {
//     // this.service.registerdata()
//     var person = { 
//       a:this.firstname,
//       b:this.lastname,
//       c:this.email,
//       d:this.psw,
//       e:this.pswrepeat
      
//    }; 
//    alert(person.a +" " +person.b +" " +person.c +" " +person.d +" " +person.e);
//   } 

//   // signinclick(){
    
//   //   loadComponent:true;
//   //   console.log("ok");

//   // }
  

// }
// // export interface Customerinterface{

// //   user:String;
// //   role:String;

// // }
