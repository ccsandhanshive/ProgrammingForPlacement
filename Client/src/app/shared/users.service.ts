import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Users} from '../model/users.model'
const Headeroption={
  headers: new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  allUsers: Users[];
UsersURL='http://localhost:3000/User';

currentUser: Users ={
    id: null,
    firstname: '',
    lastname: '' ,
    email: '',
    password: ''

}
  constructor(
    private http:HttpClient
  ) { }

  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this.UsersURL,Headeroption);
  }

  deleteUser(id:Number):Observable<Users>{
    return this.http.delete<Users>(this.UsersURL+ '/' +id,Headeroption)
  }
  createUsr(usr :Users):Observable<Users>
  {
    return this.http.post<Users>(this.UsersURL,usr,Headeroption);
  }
  UpdateUsr(usr :Users):Observable<Users>
  {
    return this.http.put<Users>(this.UsersURL+ '/' +usr.id,usr,Headeroption);
  }
}
