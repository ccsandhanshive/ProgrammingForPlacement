import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  load:boolean=true;
  title = 'ProgrammingForPlacement';
  login=false;
  ngOnInit(): void {
  this.login=false
  }
  setLogin(){
    this.login=true
  }
  setLoginFalse(){
    this.login=false
  }
 constructor(){}
 user:any
 setUser(user){
  this.user=user
 }
}
