import { Injectable } from '@angular/core';
import { WallpaperCategory } from "../Shared/wallpaper-category";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { environment } from "../../environments/environment";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WallpaperCategoryService {



  constructor(private http: HttpClient) {
   }

    PostWallpaperCategory(category:WallpaperCategory): Observable<WallpaperCategory> {
      return this.http.post<WallpaperCategory>(environment.baseApiUrl
        + environment.wallPaperCategoryUrl
      ,category)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    // return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
    updateWallpaperCategory(category:WallpaperCategory,id): Observable<WallpaperCategory> {
    // console.log('in upadte function '+environment.baseApiUrl+ environment.wallPaperCategoryUrl+'/'+id);

      return this.http.put<WallpaperCategory>(`${environment.baseApiUrl}${environment.wallPaperCategoryUrl}/${id}`
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
      //console.log(errorMessage);
      return throwError(errorMessage);
   }


   getAllWallpaperCategory():Observable<WallpaperCategory[]>{
     //console.log('this is get all from services');

      return this.http.get<WallpaperCategory[]>
      (environment.baseApiUrl+environment.wallPaperCategoryUrl)
      . pipe(
        catchError(this.errorHandler)
      )
    }

    getWallpaperCategory(id):Observable<WallpaperCategory>{
      //console.log('this is get all from services');

       return this.http.get<WallpaperCategory>
       (environment.baseApiUrl+environment.wallPaperCategoryUrl+'/'+id)
       . pipe(
         catchError(this.errorHandler)
       )
     }

    deleteWallpaperCategory(id):Observable<WallpaperCategory>
    {
      return this.http.delete<WallpaperCategory>(`${environment.baseApiUrl}${environment.wallPaperCategoryUrl}/${id}`)
      . pipe(
        catchError(this.errorHandler)
      )
    }


}
