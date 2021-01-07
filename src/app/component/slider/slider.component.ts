import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public innerWidth: any;

  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

  }

}
