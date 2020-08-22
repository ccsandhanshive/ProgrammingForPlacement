import { Component, OnInit } from '@angular/core';
import {PlacementTipsService} from "../shared/placement-tips.service";
import {PlacementTips} from '../model/placementTips.model'
@Component({
  selector: 'app-placement-tips-admin',
  templateUrl: './placement-tips-admin.component.html',
  styleUrls: ['./placement-tips-admin.component.css']
})
export class PlacementTipsAdminComponent implements OnInit {

  
  allTips: PlacementTips[];

  constructor(public placementTipsService:PlacementTipsService) { }

  ngOnInit(): void {
    this.getAlldata();
  }

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

  delete(id:Number){
    console.log(id);
    this.placementTipsService.deleteTips(id).subscribe(
      (data:PlacementTips) =>{
        this.getAlldata();
        // console.log(this.allUsers)
      }
    )
  }

  edit(usr){
    console.log(usr);
    this.placementTipsService.CurrenttTip=Object.assign({},usr);
  }

  create(CurrentCompany:PlacementTips)
  {
    console.log(CurrentCompany);
    if(CurrentCompany.id!=null){
        console.log('Update'); 
        this.placementTipsService.UpdateTips(CurrentCompany).subscribe();   
    }
    else{
        console.log('Create'); 
         this.placementTipsService.createTips(CurrentCompany).subscribe();       
    }
    
  }
}
