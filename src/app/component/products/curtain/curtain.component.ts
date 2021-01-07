import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.css']
})
export class CurtainComponent implements OnInit {
  numAmoodi:any[7];
  urlAmodi:string;
  numOfoghi:any[7];
  urlOfoghi:string;
  numZebra:any[7];
  urlZebra:string;
  numImage:any[7];
  urlImage:string;
  ex;
  constructor(private renderer: Renderer2) { }


    renderExternalScript(src: string): HTMLScriptElement {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = true;
      script.defer = true;
      this.renderer.appendChild(document.body, script);
      return script;
    }
  ngOnInit(): void {
    this.renderExternalScript('assets/plugins/ini.isotope.js').onload=()=>{};

    this.numAmoodi=[1,2,3,4,5,6,7];
    this.urlAmodi=`assets/images/curtain/amoodi/`;
    this.numOfoghi=[1,2,3,4,5];
    this.urlOfoghi=`assets/images/curtain/ofoghi/`;
    this.numZebra=[1,2,3,4,5,6];
    this.urlZebra=`assets/images/curtain/zebra/`;
    this.numImage=[1,2,3,4,5,6,7];
    this.urlImage=`assets/images/curtain/image/`;
    this.ex='.jpg';



  }




}
