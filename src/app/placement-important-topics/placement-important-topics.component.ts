import { Component, OnInit } from '@angular/core';
import {topics} from "./topicMockData"
@Component({
  selector: 'app-placement-important-topics',
  templateUrl: './placement-important-topics.component.html',
  styleUrls: ['./placement-important-topics.component.css']
})
export class PlacementImportantTopicsComponent implements OnInit {

  constructor() { }
  topics:any
  ngOnInit(): void {
    this.topics=topics
  }

}
