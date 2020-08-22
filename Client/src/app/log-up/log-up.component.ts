import { Component, OnInit } from '@angular/core';

import { NgForm ,FormsModule } from '@angular/forms';
// import { LogUpService} from './log-up.service';
import { UsersService } from '../shared/users.service';
import { Users } from '../model/users.model';
import {Router} from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.css']
})

export class LogUpComponent implements OnInit {
loadlogin:boolean
  
 
constructor( public service:UsersService,private router:Router,@Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    this.loadlogin=true;
  } 

  createUser(currentUser:Users)
  {
  
    console.log(currentUser);
    if(currentUser.id!=null){

      if ((<HTMLInputElement>document.getElementById("user")).value == "Student") {
        console.log('Update'); 
         this.UpdateUsr(currentUser);
       
      } else {
        // (<HTMLInputElement>document.getElementById("captcha")).disabled=false;
        // (<HTMLInputElement>document.getElementById("verify")).visibility='hidden';
        console.log("okds");
        this.UpdateAdm(currentUser);
        
      }

      
    }
    else{
      if ((<HTMLInputElement>document.getElementById("user")).value == "Student") {
        console.log('Create'); 
         this.createUsr(currentUser);
       
      } else {
        // (<HTMLInputElement>document.getElementById("captcha")).disabled=false;
        // (<HTMLInputElement>document.getElementById("verify")).visibility='hidden';
        console.log("osdksdsd");
        this.createAdm(currentUser);
        

      }
        
    }
    
  }
  createUsr(usr :Users)
  {
    this.service.createUsr(usr).subscribe();
  }
  UpdateUsr(usr:Users){
    this.service.UpdateUsr(usr).subscribe();
  }

  createAdm(usr :Users)
  {
    this.service.createAdm(usr).subscribe();
  }
  UpdateAdm(usr:Users){
    this.service.UpdateAdm(usr).subscribe();
  }

  gotologin(){
    this.router.navigate(['/login']);
    this.loadlogin=false;
  }

  Admin(){
    console.log('ok');
    if ((<HTMLInputElement>document.getElementById("user")).value == "Student") {
      (<HTMLInputElement>document.getElementById("captcha")).disabled=true;
     
    } else {
      (<HTMLInputElement>document.getElementById("captcha")).disabled=false;
      // (<HTMLInputElement>document.getElementById("verify")).visibility='hidden';
    }
    
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
