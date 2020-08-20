import { Component, OnInit } from '@angular/core';
import {wData} from './webinarAdsMockdata';
import { EventEmitter } from '@angular/core';
// import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-webinar-ads',
  templateUrl: './webinar-ads.component.html',
  styleUrls: ['./webinar-ads.component.css']
})
export class WebinarAdsComponent implements OnInit {
  Wdata=wData;
  constructor() { }

  ngOnInit(): void {
  }

}
