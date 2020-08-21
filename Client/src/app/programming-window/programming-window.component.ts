import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-programming-window',
  templateUrl: './programming-window.component.html',
  styleUrls: ['./programming-window.component.css']
})
export class ProgrammingWindowComponent implements OnInit {
constructor() { }
@Input() problem:any;
programmingLanguage:any;
programVisibility=false
back=false
compilarLink="https://www.onlinegdb.com/"
ngOnInit(): void {
this.back=false
this.programVisibility=false
  }
setProgramVisibility(){
  this.programVisibility=true
}
setBack(){
  this.back=true
}
}

