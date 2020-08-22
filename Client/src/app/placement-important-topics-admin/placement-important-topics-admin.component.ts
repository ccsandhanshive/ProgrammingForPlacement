import { Component, OnInit } from '@angular/core';
import {PlacementImportantTopicsService} from '../shared/placement-important-topics.service'
@Component({
  selector: 'app-placement-important-topics-admin',
  templateUrl: './placement-important-topics-admin.component.html',
  styleUrls: ['./placement-important-topics-admin.component.css']
})
export class PlacementImportantTopicsAdminComponent implements OnInit {
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
