import { Component, OnInit } from '@angular/core';
import {PlacementImportantTopicsService} from '../shared/placement-important-topics.service'
import {Topic} from '../model/topic.model';
@Component({
  selector: 'app-placement-important-topics-admin',
  templateUrl: './placement-important-topics-admin.component.html',
  styleUrls: ['./placement-important-topics-admin.component.css']
})
export class PlacementImportantTopicsAdminComponent implements OnInit {
  // constructor(private pits:PlacementImportantTopicsService) { }
  // topics:any
  // ngOnInit(): void {
  //   this.topics=this.getTopics()
  // }
  // getTopics(){
  //   return this.pits.getCompanies()
  //   .subscribe(
  //     topics => {
  //      console.log(this.topics);
  //      this.topics = topics
  //     }
  //    );
  // }

  allTopic: Topic[];

  constructor(public placementTopicsService:PlacementImportantTopicsService) { }

  ngOnInit(): void {
    this.getAlldata();
  }

  getAlldata()
  {
    this.placementTopicsService.getAllTopic().subscribe(
      (data:Topic[]) =>{
        this.allTopic=data;
        console.log(this.allTopic)
        // this.allUsers.forEach(element => {
        // console.log(element.firstname);
          
        // });
      }
    )
  }

  delete(id:Number){
    console.log(id);
    this.placementTopicsService.deleteTopic(id).subscribe(
      (data:Topic) =>{
        this.getAlldata();
        // console.log(this.allUsers)
      }
    )
  }

  edit(usr){
    console.log(usr);
    this.placementTopicsService.CurrentTopic=Object.assign({},usr);
  }

  create(CurrentCompany:Topic)
  {
    console.log(CurrentCompany);
    if(CurrentCompany.id!=null){
        console.log('Update'); 
        this.placementTopicsService.UpdateTopic(CurrentCompany).subscribe();   
    }
    else{
        console.log('Create'); 
         this.placementTopicsService.createTopic(CurrentCompany).subscribe();       
    }
    
  }
}
