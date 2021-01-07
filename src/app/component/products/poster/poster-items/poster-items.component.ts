import { Component, OnInit, Renderer2 } from '@angular/core';
import { PosterCategory } from 'src/app/Shared/poster-category';
import { Poster } from 'src/app/Shared/poster';
import { PosterCategoryService } from 'src/app/Shared/poster-category.service';
import { PosterService } from 'src/app/Shared/poster.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poster-items',
  templateUrl: './poster-items.component.html',
  styleUrls: ['./poster-items.component.css']
})
export class PosterItemsComponent implements OnInit {

  currentPosterCategory:PosterCategory;
  currentCategory:string;
  url:string='';
  urli:string='';
  items:Poster[]=[];
  classString:string='';

  constructor(private route: ActivatedRoute,
    public pcs:PosterCategoryService,
    public ps: PosterService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.currentPosterCategory = new PosterCategory();
    //console.log('WallpaperJournlItemsComponent ');
    let currentId = this.route.snapshot.params.id;
      this.pcs.getPosterCategoryById(currentId).subscribe(
        res => {this.currentPosterCategory=res;
          this.currentCategory = res.Title;
          this.renderExternalScript('assets/js/car.js').onload = () => {};
          this.renderExternalScript('assets/plugins/ini.isotope.js').onload=()=>{};}
      );
      this.ps.GetPosterOfbyCategoryId(currentId)
      .subscribe(r=> this.items =r)


    this.url =environment.baseApiUrl+environment.imageServerURL+environment.PosterCategoryImageUrl+'/';
    this.urli =environment.baseApiUrl+environment.imageServerURL+environment.PosterImageUrl+'/';
    this.classString='col-lg-3 col-md-3 col-sm-4 col-6 isotope-item ';



  }
  renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }

}

