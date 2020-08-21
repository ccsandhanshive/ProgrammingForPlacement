import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Users } from '../model/users.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  allUsers: Users[];

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getAllUsersdata();
  }

  getAllUsersdata()
  {
    this.userService.getAllUsers().subscribe(
      (data:Users[]) =>{
        this.allUsers=data;
        console.log(this.allUsers)
        // this.allUsers.forEach(element => {
        // console.log(element.firstname);
          
        // });
      }
    )
  }

  deleteUser(id:Number){
    console.log(id);
    this.userService.deleteUser(id).subscribe(
      (data:Users) =>{
        this.getAllUsersdata();
        // console.log(this.allUsers)
      }
    )
  }

  editUser(usr){
    console.log(usr);
    this.userService.currentUser=Object.assign({},usr);
  }
}
