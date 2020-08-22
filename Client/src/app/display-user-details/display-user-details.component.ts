import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-display-user-details',
  templateUrl: './display-user-details.component.html',
  styleUrls: ['./display-user-details.component.css']
})
export class DisplayUserDetailsComponent implements OnInit {

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

}
