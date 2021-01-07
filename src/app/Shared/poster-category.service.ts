import { Injectable } from '@angular/core';
import { PosterCategory } from './poster-category';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PosterCategoryService {

  constructor(private http: HttpClient) { }

  PostPosterCategory(posterCategory:PosterCategory): Observable<PosterCategory> {
    return this.http.post<PosterCategory>(environment.baseApiUrl
      + environment.PosterCategoryUrl
    ,posterCategory)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllPosterCategory():Observable<PosterCategory[]>{
     return this.http.get<PosterCategory[]>
     (environment.baseApiUrl+environment.PosterCategoryUrl)
     . pipe(
       catchError(this.errorHandler)
     )
   }

   getPosterCategoryById(id):Observable<PosterCategory>{
    return this.http.get<PosterCategory>
    (environment.baseApiUrl+environment.PosterCategoryUrl+'/'+id)
    . pipe(
      catchError(this.errorHandler)
    )
  }

   deletePosterCategory(id):Observable<PosterCategory>
   {
    // console.log(`id= ${id} and patyh is ${environment.baseApiUrl}${environment.wallPaperCategoryUrl}/${id}`);
     return this.http.delete<PosterCategory>(`${environment.baseApiUrl}${environment.PosterCategoryUrl}/${id}`)
     . pipe(
       catchError(this.errorHandler)
     )
   }
   updatePosterCategory(category:PosterCategory): Observable<PosterCategory> {
    // console.log('in upadte function '+environment.baseApiUrl+ environment.wallPaperCategoryUrl+'/'+id);

      return this.http.put<PosterCategory>(`${environment.baseApiUrl}${environment.PosterCategoryUrl}/${category.Id}`
      ,category)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    GetPosterWithCategoryTitle():Observable<any> {
      return this.http.get<any[]>
     (environment.baseApiUrl+environment.PosterUrl+'/GetPosterWithCategoryTitle')
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
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
