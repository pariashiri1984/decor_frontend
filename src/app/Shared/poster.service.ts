import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poster } from './poster';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(private http: HttpClient) { }

  PostPoster(poster:Poster): Observable<Poster> {
    return this.http.post<Poster>(environment.baseApiUrl
      + environment.PosterUrl
    ,poster)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllPoster():Observable<Poster[]>{
     return this.http.get<Poster[]>
     (environment.baseApiUrl+environment.PosterUrl)
     . pipe(
       catchError(this.errorHandler)
     )
   }

   GetPosterOfbyCategoryId(id:string):Observable<Poster[]>{
    return this.http.get<Poster[]>
    (environment.baseApiUrl+environment.PosterUrl+'/GetPosterOfbyCategoryId/'+id)
    . pipe(
      catchError(this.errorHandler)
    )
  }

   deletePoster(id):Observable<Poster>
   {
     return this.http.delete<Poster>(`${environment.baseApiUrl}${environment.PosterUrl}/${id}`)
     . pipe(
       catchError(this.errorHandler)
     )
   }
   updatePoster(pos:Poster): Observable<Poster> {

      return this.http.put<Poster>(`${environment.baseApiUrl}${environment.PosterUrl}/${pos.Id}`
      ,pos)
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

}
