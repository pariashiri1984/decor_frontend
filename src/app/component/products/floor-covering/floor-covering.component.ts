import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-covering',
  templateUrl: './floor-covering.component.html',
  styleUrls: ['./floor-covering.component.css']
})
export class FloorCoveringComponent implements OnInit {

  items:any[12];
  url:string;
  ex;
  constructor() { }

  ngOnInit(): void {
    this.items=[1,2,3,4,5,6,7,8,9,10,11,12];
    this.url=`assets/images/floorCovering/`;
    this.ex='.jpg'
  }}
