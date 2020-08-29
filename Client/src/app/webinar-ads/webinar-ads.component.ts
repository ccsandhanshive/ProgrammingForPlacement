import { Component, OnInit } from '@angular/core';
import {WebinarAdsService} from '../shared/webinar-ads.service' 
import {Webad} from "../model/webad.model"

@Component({
  selector: 'app-webinar-ads',
  templateUrl: './webinar-ads.component.html',
  styleUrls: ['./webinar-ads.component.css']
})
export class WebinarAdsComponent implements OnInit {
  // Wdata:any;

  homeSlider={items:4 ,dots:true,nav:true,loop:true,autoplay:true,center:true,padding:0};
  allWebad:Webad[];
  
  constructor(private webinarAdsService:WebinarAdsService) { }

  ngOnInit(): void {
    // this.Wdata=this.getWebads()
    this.getAlldata();
  }
  // getWebads(){
  //   return this.WebinarAdsService.getWebads()
  //   .subscribe(
  //     Wdata => {
  //      console.log(this.Wdata);
  //      this.Wdata = Wdata
  //     }
  //    );
  // }
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

}
