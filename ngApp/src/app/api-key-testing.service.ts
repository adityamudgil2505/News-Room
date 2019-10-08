import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IpcRenderer } from 'electron';

import {INews} from './news'

@Injectable({
  providedIn: 'root'
})
export class ApiKeyTestingService {

  private ipc: IpcRenderer;
  private _url: String="https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-25&sortBy=publishedAt&apiKey=";
  private _apiKey: String="";
  // c89accef77b945d0b6f430dab6bfc6ee
  constructor(private http:HttpClient){
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer
      } catch (error) {
        throw error
      }
    } else {
      console.warn('Could not load electron ipc')
    }
  }
  
  // Set api key to loacl varible
  setAPI(apiKey:String){
    this._apiKey=apiKey;
  }

  // This will return the response wheather we use a valid api key or not
  isValidAPI():Observable <INews[]>{
    return this.http.get<INews[]>(`${this._url}${this._apiKey}`)
                    .pipe( catchError(e=> throwError(e)));
  }
  
  // This will save api key in user Configuration file by calling function in main process
  saveAPI(){
    this.ipc.send("setAPIKey", this._apiKey);
  }

  // This will save language in user Configuration
  saveLang(lang:String){
    this.ipc.send("setLang", lang);
  }

  saveCountry(country:String){
    this.ipc.send("setCountry", country);
  }

  getDetails(){
    let obj:any;
    obj = this.ipc.sendSync("fetchDetails");
    return obj;
  }
  
  addNewsToBookmark(news:any){
    this.ipc.send("addToBookmark", news);
  }
  removeNewsFromBookmark(news:any){
    this.ipc.send("removeFromBookmark", news);
  }

  addNewsToRecent(news:any){
    this.ipc.send("addToRecent", news);
  }

}
