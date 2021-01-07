import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { WallpaperJournal } from './wallpaper-journal';

@Injectable({
  providedIn: 'root'
})
export class WallpaperJournalService {

  constructor(private http: HttpClient) {
  }

   PostWallpaperJournal(category:WallpaperJournal): Observable<WallpaperJournal> {


     return this.http.post<WallpaperJournal>(environment.baseApiUrl
       + environment.wallPaperJournalUrl
     ,category)
     .pipe(
       catchError(this.errorHandler)
     )
   }

   updateWallpaperJournal(category:WallpaperJournal): Observable<WallpaperJournal> {
     return this.http.put<WallpaperJournal>(`${environment.baseApiUrl}${environment.wallPaperJournalUrl}/${category.Id}`
     ,category)
     .pipe(
       catchError(this.errorHandler)
     )
   }


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


  getAllWallpaperJournal():Observable<WallpaperJournal[]>{
     return this.http.
     get<WallpaperJournal[]>(environment.baseApiUrl+environment.wallPaperJournalUrl)
     . pipe(
       catchError(this.errorHandler)
     )
   }

   getWallpaperJournalByID(id:number):Observable<WallpaperJournal>{

     return this.http.
     get<WallpaperJournal>(environment.baseApiUrl+environment.wallPaperJournalUrl+'/'+id)
     . pipe(
       catchError(this.errorHandler)
     )
   }



   deleteWallpaperJournal(id):Observable<WallpaperJournal>
   {
    // console.log(`id= ${id} and patyh is ${environment.baseApiUrl}${environment.WallpaperJournalUrl}/${id}`);
     return this.http.delete<WallpaperJournal>(`${environment.baseApiUrl}${environment.wallPaperJournalUrl}/${id}`)
     . pipe(
       catchError(this.errorHandler)
     )
   }


}
