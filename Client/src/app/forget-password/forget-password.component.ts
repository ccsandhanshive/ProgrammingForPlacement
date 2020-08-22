import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Users } from '../model/users.model';
import { Admins } from '../model/users.model';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  
  email:String="";
  pswrepeat:String="";
  psw:String="";

  loadforgetpass:boolean;
  loadoutlet:boolean;
  passchangeflag:boolean=false;
  checkinsideadminflag:boolean=false;
  allUsers: Users[];
  allAdmins:Admins[];
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.loadforgetpass=true;
    this.loadoutlet=false;

    this.getAllUsersdata();

  }
  getAllUsersdata()
  {
    this.userService.getAllUsers().subscribe(
      (data:Users[]) =>{
        this.allUsers=data;
        console.log(this.allUsers)
      }
    )
    this.userService.getAllAdmins().subscribe(
      (data:Admins[]) =>{
        this.allAdmins=data;
        console.log(this.allAdmins)
      }
    )

  }

  hideforgetpass(){
    this.loadforgetpass=false;
    this.loadoutlet=true;
  }

  chgpassclick()
  {
    console.log("Inside");
    var person = { 
      a:this.email,
      b:this.psw,
      c:this.pswrepeat
      
   }; 
   
  for (var val of this.allUsers) {
      if(person.a==val.email)
      {
        console.log(val);     
        val.password=person.b;
        this.checkinsideadminflag=true;
        console.log(val);
        this.UpdateUsr(val);
        alert("Password Updated")
        break;
      }
  }
  if(!(this.checkinsideadminflag)){
    
    for (var val of this.allAdmins) {
      if(person.a==val.email)
      {
        console.log(val);
        val.password=person.b;
        this.passchangeflag=true;
        this.UpdateAdm(val);
        alert("Password Updated")
        this.passchangeflag=true;
        break;
      }
      else{       
        this.passchangeflag=false
      }
  }
  if(this.passchangeflag==false){
    alert("NO User EXISTS!! OR Please Check your Email-ID!")
  }
 
}
}

  UpdateUsr(usr:Users){
    this.userService.UpdateUsr(usr).subscribe();
  }
  UpdateAdm(usr:Users){
    this.userService.UpdateAdm(usr).subscribe();
  }

}
