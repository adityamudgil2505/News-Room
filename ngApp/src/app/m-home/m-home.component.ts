import { Component, OnInit } from '@angular/core';
import {ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { INews} from '../news';
@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrls: ['./m-home.component.scss']
})
export class MHomeComponent implements OnInit {
  constructor(private apiService: ApiKeyTestingService, private _sanitizer: DomSanitizer) { }
  public news:any=[];
  ngOnInit() {
    this.apiService.isValidAPI()
                   .subscribe((data:any)=>{                     
                     this.news=data.articles;
                     console.log("line 18");
                     console.log(this.news);
                    //  this.news.forEach(this.changingURLToSafe);
                     for(let i=0; i<this.news.length; i++){
                       this.news[i].urlToImage = this._sanitizer.bypassSecurityTrustStyle(`url(${this.news[i].urlToImage})`);
                     }
                   },
                   error=>{
                     console.log(error.error.message);
                   }
                  )
    };
  changingURLToSafe(value, index, array){
    value.urlToImage = this._sanitizer.bypassSecurityTrustStyle(`url(${value.urlToImage})`)
    console.log("You entered ");
  }
}
