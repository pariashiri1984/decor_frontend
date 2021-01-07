import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed:boolean;

  constructor() { }

  ngOnInit(): void {
    this.isCollapsed=false;
  }
  clicked(){
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);



  }
}
