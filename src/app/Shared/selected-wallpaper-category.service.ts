import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { WallpaperCategory } from './wallpaper-category';
import { WallpaperJournal } from './wallpaper-journal';
import { WallpaperJournalWithTitleService } from './wallpaper-journal-with-title.service';
import { WallpaperJournalWithTitle } from './wallpaper-journal-with-title';
import { PosterCategory } from './poster-category';
import { Poster } from './poster';

@Injectable({
  providedIn: 'root'
})
export class SelectedWallpaperCategoryService {

  category: WallpaperCategory = new WallpaperCategory();
  journal : WallpaperJournal = new WallpaperJournal();
  journalWithTitle: WallpaperJournalWithTitle =new WallpaperJournalWithTitle();
  posterCategory:PosterCategory=new PosterCategory();
  poster:Poster=new Poster();

  private selectedCat = new BehaviorSubject(this.category);
  private selectedJournal = new BehaviorSubject(this.journal);
  private selectedJournalWithTitle = new BehaviorSubject(this.journalWithTitle);
  private selectedPosterCategory  = new BehaviorSubject(this.posterCategory);
  private selectedPoster = new BehaviorSubject(this.poster);

  currentCategory = this.selectedCat.asObservable();
  currentJournal = this.selectedJournal.asObservable();
  currentJournalWithTitle = this.selectedJournalWithTitle.asObservable();
  currentPosterCategory = this.selectedPosterCategory.asObservable();
  currentPoster = this.selectedPoster.asObservable();

  constructor() { }

  changePosterCategory(newState: PosterCategory){
  this.selectedPosterCategory.next(newState);

}
changePoster(p:Poster){
  this.selectedPoster.next(p);
}
  changeCategory(wallpaperCategory: WallpaperCategory) {

    this.selectedCat.next(wallpaperCategory);
  }
  changeJournal(wallpaperJournal: WallpaperJournal) {

    this.selectedJournal.next(wallpaperJournal);
  }

  changeJournalWithTitle(wallpaperJournalWithTitle: WallpaperJournalWithTitle) {

    this.selectedJournalWithTitle.next(wallpaperJournalWithTitle);
  }

  private subject = new Subject<any>();
  sendClickEvent(m?) {
    this.subject.next();
 //console.log('sendClickEvent by  '+m);
  }
  getClickEvent(): Observable<any> {
    //console.log('getClickEvent...');
    return this.subject.asObservable();
  }


}
