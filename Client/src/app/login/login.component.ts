import { Component, OnInit } from '@angular/core';
import { LogUpService } from '../log-up/log-up.service';
import { UsersService } from '../shared/users.service';
import { Users } from '../model/users.model';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String="";
  pswrepeat:String="";
  psw:String="";
  loginFlag=false;
  allUsers: Users[];
  loadlogup:boolean;
  constructor(private LogUpService:LogUpService,private userService:UsersService,private router:Router) {  }

  ngOnInit(): void {
    // this.LogUpService.$logup
    // .subscribe((data)=>{
    //   console.log(data);
    // })
    this.loadlogup=true;
    this.getAllUsersdata();
  }
  getAllUsersdata()
  {
    this.userService.getAllUsers().subscribe(
      (data:Users[]) =>{
        this.allUsers=data;
        // console.log(this.allUsers)
        // this.allUsers.forEach(element => {
        // console.log(element.firstname);
        
          
        // });

        
      }
    )
  }

  lgbtnclick() {
    // this.service.registerdata()
    var person = { 
      a:this.email,
      b:this.psw
      
   }; 
  //  alert(person.a +"" +person.b);
   for (var val of this.allUsers) {
     if(person.a==val.email && person.b==val.password)
     {
      //  alert('login Successful');
       this.loginFlag=true;   
       break;
     }
     else{
      this.loginFlag=false;  
      // alert('login Failed');
      
     }
    
   }
   if(this.loginFlag==true)
   {
    alert('login Successful');
   }
   else{
    alert('login Failed');
   }
  }

  gotologup(){
    this.router.navigate(['/logup']);
    this.loadlogup=false;
  }

}
