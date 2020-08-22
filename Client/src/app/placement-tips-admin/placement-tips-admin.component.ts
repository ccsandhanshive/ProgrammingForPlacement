import { Component, OnInit } from '@angular/core';
import {PlacementTipsService} from "../placement-tips.service"
@Component({
  selector: 'app-placement-tips-admin',
  templateUrl: './placement-tips-admin.component.html',
  styleUrls: ['./placement-tips-admin.component.css']
})
export class PlacementTipsAdminComponent implements OnInit {
  pdata:any;
  constructor(private PlacementTipsService:PlacementTipsService) { }

  ngOnInit(): void {
    this.pdata=this.getPlacementTips()
  }
  getPlacementTips(){
    return this.PlacementTipsService.getPlacementTips()
    .subscribe(
      pdata => {
       console.log(this.pdata);
       this.pdata = pdata
      }
    );
  }
}
