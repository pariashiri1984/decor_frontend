import { Component, OnInit, Renderer2 } from '@angular/core';
import { WallpaperJournal } from 'src/app/Shared/wallpaper-journal';
import { WallpaperCategory } from 'src/app/Shared/wallpaper-category';
import { ActivatedRoute } from '@angular/router';
import { WallpaperJournalService } from 'src/app/Shared/wallpaper-journal.service';
import { WallpeparJournalItemService } from 'src/app/Shared/wallpepar-journal-item.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WallpeparJournalItem } from 'src/app/Shared/wallpepar-journal-item';

@Component({
  selector: 'app-wallpaper-journl-items',
  templateUrl: './wallpaper-journl-items.component.html',
  styleUrls: ['./wallpaper-journl-items.component.css']
})
export class WallpaperJournlItemsComponent implements OnInit {
  currentJournal:WallpaperJournal;
  currentCategory:string;
  url:string='';
  urli:string='';
  items:WallpeparJournalItem[]=[];
  classString:string='';

  constructor(private route: ActivatedRoute,
    public wjs:WallpaperJournalService,
    public wji: WallpeparJournalItemService,
    private http: HttpClient,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    //console.log('WallpaperJournlItemsComponent ');
    this.currentJournal= new WallpaperJournal();
    this.route.queryParams
    .subscribe(params => {
      this.currentCategory = params['cat'];
      this.wjs.getWallpaperJournalByID(params['id'])
      .subscribe(res=>
        {
        this.currentJournal=res;
        this.wji.getAllByJournalId(params['id'])
        .subscribe(r=> this.items =r)
        this.renderExternalScript('assets/js/car.js').onload = () => {};
    this.renderExternalScript('assets/plugins/ini.isotope.js').onload=()=>{};

      }
        );
    });
    this.url =environment.baseApiUrl+environment.imageServerURL+environment.wallPaperJournalImageUrl+'/';
    this.urli =environment.baseApiUrl+environment.imageServerURL+environment.wallPaperJournalItemImageUrl+'/';
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
