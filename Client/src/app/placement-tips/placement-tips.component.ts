import { Component, OnInit } from '@angular/core';
import {placementData} from './placementTipsInterface'
import {PlacementTipsService} from "../placement-tips.service"
@Component({
  selector: 'app-placement-tips',
  templateUrl: './placement-tips.component.html',
  styleUrls: ['./placement-tips.component.css']
})
export class PlacementTipsComponent implements OnInit {
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
