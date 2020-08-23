import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Users, Admins, LoginStatus} from '../model/users.model'
const Headeroption={
  headers: new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  allUsers: Users[];
UsersURL='http://localhost:3000/User';
AdminURL='http://localhost:3000/Admin';
statusURL='http://localhost:3000/Status';
currentUser: Users ={
    id: null,
    firstname: '',
    lastname: '' ,
    email: '',
    password: '',
    usertype:'',
    captcha:'No NEED'

}
currentAdmin: Admins ={
    id: null,
    firstname: '',
    lastname: '' ,
    email: '',
    password: '',
    usertype:'',
    captcha:''

}
LoginStatus:LoginStatus={
  id:null,
  username:'',
  userType:'',
  status:''
}
  constructor(
    private http:HttpClient
  ) { }
createStatus(LoginStatus:LoginStatus):Observable<LoginStatus>{
  return this.http.post<LoginStatus>(this.statusURL,LoginStatus,Headeroption)
}
UpdateStatus(LoginStatus:LoginStatus):Observable<LoginStatus>
{
  return this.http.put<LoginStatus>(this.UsersURL+ '/' +LoginStatus.id,LoginStatus,Headeroption);
}

  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this.UsersURL,Headeroption);
  }

  getAllAdmins():Observable<Admins[]>{
    return this.http.get<Admins[]>(this.AdminURL,Headeroption);
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


  createAdm(adm :Admins):Observable<Admins>
  {
    return this.http.post<Admins>(this.AdminURL,adm,Headeroption);
  }
  UpdateAdm(adm :Admins):Observable<Admins>
  {
    return this.http.put<Admins>(this.AdminURL+ '/' +adm.id,adm,Headeroption);
  }

}
