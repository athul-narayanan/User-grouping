import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../environments/environment'
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) {

   }

   getUserDetails(){
     return this.http.get(environment.baseURL).pipe(
       map(res=>{
         return res
       }),
       catchError(err=>{
         return throwError(err);
       })
     )
   }
}
