import { Component, OnInit } from '@angular/core';
import {WebinarAdsService} from '../shared/webinar-ads.service' ;
import {Webad} from "../model/webad.model"

@Component({
  selector: 'app-webinar-ads-admin',
  templateUrl: './webinar-ads-admin.component.html',
  styleUrls: ['./webinar-ads-admin.component.css']
})
export class WebinarAdsAdminComponent implements OnInit {
  // Wdata:any;
  // constructor(private WebinarAdsService:WebinarAdsService) { }

  // ngOnInit(): void {
    // this.Wdata=this.getWebads()
  // }
  // getWebads(){
  //   return this.WebinarAdsService.getWebads()
  //   .subscribe(
  //     Wdata => {
  //      console.log(this.Wdata);
  //      this.Wdata = Wdata
  //     }
  //    );
  // }

  allWebad: Webad[];

constructor(public webinarAdsService:WebinarAdsService) { }

ngOnInit(): void {
  this.getAlldata();
}

getAlldata()
{
  this.webinarAdsService.getAllProblem().subscribe(
    (data:Webad[]) =>{
      this.allWebad=data;
      console.log(this.allWebad)
      // this.allUsers.forEach(element => {
      // console.log(element.firstname);
        
      // });
    }
  )
}

delete(id:Number){
  console.log(id);
  this.webinarAdsService.deleteProblem(id).subscribe(
    (data:Webad) =>{
      this.getAlldata();
      // console.log(this.allUsers)
    }
  )
}

edit(usr){
  console.log(usr);
  this.webinarAdsService.CurrentWebad=Object.assign({},usr);
}

create(Webad:Webad)
{
  console.log(Webad);
  if(Webad.id!=null){
      console.log('Update'); 
      this.webinarAdsService.UpdateProblem(Webad).subscribe();   
  }
  else{
      console.log('Create'); 
       this.webinarAdsService.createProblem(Webad).subscribe();       
  }
  
}
}
