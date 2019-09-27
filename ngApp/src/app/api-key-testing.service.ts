import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {INews} from './news'

@Injectable({
  providedIn: 'root'
})
export class ApiKeyTestingService {

  constructor(private http:HttpClient){}

  private _url: string="https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-25&sortBy=publishedAt&apiKey=";
  setAPI(_apiKey:String){
    this._url=this._url+_apiKey;
    // f1a80721606a4ea3b71f5e65e7c4d7a
  }
  isValidAPI():Observable <INews[]>{
    return this.http.get<INews[]>(this._url)
                    .pipe( catchError(e=> throwError(e)));
  }
}
