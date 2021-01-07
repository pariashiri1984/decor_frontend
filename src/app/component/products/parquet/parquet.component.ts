import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parquet',
  templateUrl: './parquet.component.html',
  styleUrls: ['./parquet.component.css']
})
export class ParquetComponent implements OnInit {
  num:any[5];
  url:string;
  ex;
  constructor() { }

  ngOnInit(): void {
    this.num=[1,2,3,4,5];
    this.url=`./../../../../assets/images/parquet/`;
    this.ex='.jpg';
  }

}
