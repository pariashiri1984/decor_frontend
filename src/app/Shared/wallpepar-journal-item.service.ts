import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { WallpaperJournalWithTitle } from './wallpaper-journal-with-title';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { WallpeparJournalItem } from './wallpepar-journal-item';

@Injectable({
  providedIn: 'root'
})
export class WallpeparJournalItemService {

  constructor(private http: HttpClient) { }

  getAll():Observable<WallpeparJournalItem[]>{

    return this.http.
    get<WallpeparJournalItem[]>(environment.baseApiUrl+environment.wallPaperJournalItemUrl)
    . pipe(
      catchError(this.errorHandler)
    )
  }

  getAllByJournalId(id):Observable<WallpeparJournalItem[]>{

    return this.http.
    get<WallpeparJournalItem[]>(
      environment.baseApiUrl+environment.wallPaperJournalItemUrl
      +'/getAllByJournalId/'+id)
    . pipe(
      catchError(this.errorHandler)
    )
  }
  countJournalItem(id):Observable<number>
  {
    //console.log('in count '+environment.baseApiUrl+environment.wallPaperJournalItemUrl+'/GetCountOf/'+id);

    return this.http.get<number>(environment.baseApiUrl+environment.wallPaperJournalItemUrl+'/GetCountOf/'+id);

  }

   getById(id:number):Observable<WallpeparJournalItem>{

     return this.http.
     get<WallpeparJournalItem>(environment.baseApiUrl+environment.wallPaperJournalItemUrl+'/'+id)
     . pipe(
       catchError(this.errorHandler)
     )
   }



   add(item:WallpeparJournalItem):Observable<WallpeparJournalItem>
   {
    //console.log(`in add = ${environment.baseApiUrl}${environment.wallPaperJournalItemUrl}${item.WallpaperJournalId}`);
     return this.http
     .post<WallpeparJournalItem>(
       `${environment.baseApiUrl}${environment.wallPaperJournalItemUrl}`,
       item)
     . pipe(
       catchError(this.errorHandler)
     )
   }

   delete(id):Observable<WallpeparJournalItem>
   {
    // console.log(`id= ${id} and patyh is ${environment.baseApiUrl}${environment.WallpaperJournalUrl}/${id}`);
     return this.http.delete<WallpeparJournalItem>(`${environment.baseApiUrl}${environment.wallPaperJournalItemUrl}/${id}`)
     . pipe(
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
   // console.log(errorMessage);
    return throwError(errorMessage);
 }





}
