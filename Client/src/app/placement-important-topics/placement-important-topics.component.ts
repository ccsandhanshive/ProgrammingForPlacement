import { Component, OnInit } from '@angular/core';
import {PlacementImportantTopicsService} from '../shared/placement-important-topics.service'
@Component({
  selector: 'app-placement-important-topics',
  templateUrl: './placement-important-topics.component.html',
  styleUrls: ['./placement-important-topics.component.css']
})
export class PlacementImportantTopicsComponent implements OnInit {

  constructor(private pits:PlacementImportantTopicsService) { }
  topics:any
  ngOnInit(): void {
   this.topics=this.getTopics()
  }
  getTopics(){
    return this.pits.getCompanies()
    .subscribe(
      topics => {
       console.log(this.topics);
       this.topics = topics
      }
     );
  }
}
