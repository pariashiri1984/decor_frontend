import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

    constructor(private http: HttpClient) { }

    upload( image: File,directoryName: string, originalFileName:string,newFileName:string): Observable<any>
    {

      var formData: any = new FormData();
      let extention = this.getFileExtentionWithDot(originalFileName);
      let f= extention?newFileName+extention:newFileName;


      formData.append("image", image, f);




      return this.http.post(directoryName
        , formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe(
        catchError(this.errorMgmt)
      )
    }

    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
    getFileExtentionWithDot(filename){
      let extention = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : null;
      extention = '.'+extention;
      return extention;

    }

    deleteFile(path:string):boolean{
      //console.log('in del path ='+path);

      this.http.delete(path)
      .subscribe(
        (event:HttpEvent<any>)=> {
          if(event.type === HttpEventType.Response &&event.status === 200)
          return true;
        }
      );
      return false;

    }
}


