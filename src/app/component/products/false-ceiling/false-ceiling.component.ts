import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-false-ceiling',
  templateUrl: './false-ceiling.component.html',
  styleUrls: ['./false-ceiling.component.css']
})
export class FalseCeilingComponent implements OnInit {

  items:any[8];
  url:string;
  ex;
  showMore = false;
  constructor() { }

  ngOnInit(): void {
    this.items=[1,2,3,4,5,6,7,8];
    this.url=`assets/images/falseCeiling/`;
    this.ex='.jpg'
  }



}
