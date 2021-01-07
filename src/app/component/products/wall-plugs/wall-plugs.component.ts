import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall-plugs',
  templateUrl: './wall-plugs.component.html',
  styleUrls: ['./wall-plugs.component.css']
})
export class WallPlugsComponent implements OnInit {
  items:any[8];
  url:string;
  ex;
  constructor() { }

  ngOnInit(): void {
    this.items=[1,2,3,4,5,6,7,8];
    this.url=`assets/images/wallPlugs/`;
    this.ex='.jpg'
  }

}
