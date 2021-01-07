import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knauf',
  templateUrl: './knauf.component.html',
  styleUrls: ['./knauf.component.css']
})
export class KnaufComponent implements OnInit {

  items:any[11];
  url:string;
  ex;
  constructor() { }

  ngOnInit(): void {
    this.items=[1,2,3,4,5,6,7,8,9,10,11];
    this.url=`assets/images/knauf/`;
    this.ex='.jpg'
  }
}
