import { Component, OnInit } from '@angular/core';
import { LogUpService } from '../log-up/log-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String="";
  pswrepeat:String="";
  psw:String="";

  constructor(private LogUpService:LogUpService) {  }

  ngOnInit(): void {
    // this.LogUpService.$logup
    // .subscribe((data)=>{
    //   console.log(data);
    // })
  }

  lgbtnclick() {
    // this.service.registerdata()
    var person = { 
      a:this.email,
      b:this.psw,
      c:this.pswrepeat
      
   }; 
   alert(person.a +"" +person.b+"" +person.c);
  }

}
