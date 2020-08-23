import { Component, OnInit } from '@angular/core';
import {PlacementImportantTopicsService} from '../shared/placement-important-topics.service'
import {Topic} from '../model/topic.model';
@Component({
  selector: 'app-placement-important-topics',
  templateUrl: './placement-important-topics.component.html',
  styleUrls: ['./placement-important-topics.component.css']
})
export class PlacementImportantTopicsComponent implements OnInit {

  allTopic: Topic[];

  constructor(public placementTopicsService:PlacementImportantTopicsService) { }
  // topics:any
  ngOnInit(): void {
  //  this.topics=this.getTopics()
  this.getAlldata();

  }
  // getTopics(){
  //   return this.pits.getCompanies()
  //   .subscribe(
  //     topics => {
  //      console.log(this.topics);
  //      this.topics = topics
  //     }
  //    );
  // }
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
}
