import { Component, OnInit } from '@angular/core';
import {placementData} from './placementTipsInterface'
import {PlacementTipsService} from "../shared/placement-tips.service";
import {PlacementTips} from '../model/placementTips.model'

@Component({
  selector: 'app-placement-tips',
  templateUrl: './placement-tips.component.html',
  styleUrls: ['./placement-tips.component.css']
})
export class PlacementTipsComponent implements OnInit {
  // pdata:any;
  allTips: PlacementTips[];

  constructor(public placementTipsService:PlacementTipsService) { }
  

  ngOnInit(): void {
    // this.pdata=this.getPlacementTips()
    this.getAlldata();

  }
  // getPlacementTips(){
  //   return this.PlacementTipsService.getPlacementTips()
  //   .subscribe(
  //     pdata => {
  //      console.log(this.pdata);
  //      this.pdata = pdata
  //     }
  //   );
  // }
  getAlldata()
  {
    this.placementTipsService.getAllTips().subscribe(
      (data:PlacementTips[]) =>{
        this.allTips=data;
        console.log(this.allTips)
        // this.allUsers.forEach(element => {
        // console.log(element.firstname);
          
        // });
      }
    )
  }
}
