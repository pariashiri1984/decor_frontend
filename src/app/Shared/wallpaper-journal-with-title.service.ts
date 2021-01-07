import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { WallpaperJournalWithTitle } from './wallpaper-journal-with-title';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WallpaperJournalWithTitleService {

  constructor(private http: HttpClient) { }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

  getAll():Observable<WallpaperJournalWithTitle[]>{
    return  this.http.get<WallpaperJournalWithTitle[]>(
      environment.baseApiUrl+environment.wallpaperJournalWithTitleURL)
      .pipe(catchError(this.errorHandler));

  }


}
