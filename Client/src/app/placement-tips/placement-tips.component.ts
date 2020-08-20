import { Component, OnInit } from '@angular/core';
import {placementData} from './placementTipsInterface'
import {pData} from './Placemnt-info-Mockdata'

@Component({
  selector: 'app-placement-tips',
  templateUrl: './placement-tips.component.html',
  styleUrls: ['./placement-tips.component.css']
})
export class PlacementTipsComponent implements OnInit {
  pdata=pData;
  constructor() { }

  ngOnInit(): void {
  }

}
