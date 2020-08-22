import { Component, OnInit } from '@angular/core';
import {WebinarAdsService} from '../webinar-ads.service' 
@Component({
  selector: 'app-webinar-ads-admin',
  templateUrl: './webinar-ads-admin.component.html',
  styleUrls: ['./webinar-ads-admin.component.css']
})
export class WebinarAdsAdminComponent implements OnInit {
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
