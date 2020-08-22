import { Component, OnInit } from '@angular/core';
import {WebinarAdsService} from '../shared/webinar-ads.service' 

@Component({
  selector: 'app-webinar-ads',
  templateUrl: './webinar-ads.component.html',
  styleUrls: ['./webinar-ads.component.css']
})
export class WebinarAdsComponent implements OnInit {
  Wdata:any;
  constructor(private WebinarAdsService:WebinarAdsService) { }

  ngOnInit(): void {
    this.Wdata=this.getWebads()
  }
  getWebads(){
    return this.WebinarAdsService.getWebads()
    .subscribe(
      Wdata => {
       console.log(this.Wdata);
       this.Wdata = Wdata
      }
     );
  }

}
