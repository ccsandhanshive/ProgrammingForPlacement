import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { LogUpService } from '../log-up/log-up.service';
import { UsersService } from '../shared/users.service';
import { Users } from '../model/users.model';
import { Admins } from '../model/users.model';
import {Router} from '@angular/router'
import {AppComponent} from '../app.component'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @Output() user=new EventEmitter<String>();
  allUsers: Users[];
  allAdmins:Admins[];

  email:String="";
  pswrepeat:String="";
  psw:String="";
  loginFlag=false;
 
  loadlogup:boolean;
  loadoutlet:boolean;
  checkinsideadminflag:boolean=false;
  gotoHome:boolean=false;

  constructor(private LogUpService:LogUpService,private userService:UsersService,private router:Router) {  }

  ngOnInit(): void {
    // this.LogUpService.$logup
    // .subscribe((data)=>{
    //   console.log(data);
    // })
    this.loadoutlet=false;
    this.loadlogup=false;
    this.getAllUsersdata();
    
  }
  getAllUsersdata()
  {
    this.userService.getAllUsers().subscribe(
      (data:Users[]) =>{
        this.allUsers=data;

      }
    )
    this.userService.getAllAdmins().subscribe(
      (data:Admins[]) =>{
        this.allAdmins=data;
        console.log(this.allAdmins)
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
       this.checkinsideadminflag=true;
       this.user.emit("Student login")
       this.loadlogup=true

       break;
     }
    
   }
   if(!(this.checkinsideadminflag)){
   for (var val of this.allAdmins) {
    if(person.a==val.email && person.b==val.password)
    {
      this.loginFlag=true;  
      this.user.emit("Admin login")
      // this.router.navigate(['/userlist']);
      this.gotoHome=true;

      break;
    }
  
   
  }
  if(this.loginFlag==false){
    alert("Incorrect username/password")
    this.user.emit("")
  }
 

}
   
  }

  // gotologup(){
  //   this.router.navigate(['/logup']);
    
  // }
  hidelogin(){
    this.loadlogup=true;
    this.loadoutlet=true;
  }


}
