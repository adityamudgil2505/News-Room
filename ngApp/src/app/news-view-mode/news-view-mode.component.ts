import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { Router } from '@angular/router';
import { INews} from '../news';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import * as moment from 'moment';
@Component({
  selector: 'app-news-view-mode',
  templateUrl: './news-view-mode.component.html',
  styleUrls: ['./news-view-mode.component.scss']
})
export class NewsViewModeComponent implements OnInit {

  constructor(private apiService: ApiKeyTestingService, private router: Router, private _sanitizer: DomSanitizer) { }
  public News:any;
  public title:String;
  public urlToImage:String;
  public image:any;
  public source:String;
  public dt:moment.Moment;
  public date:String;
  public description:String;
  public content:any;
  ngOnInit() {
    this.apiService.isValidAPI()
                   .subscribe((data:any)=>{                     
                     this.News=data.articles[12];
                     this.title=this.News.title;
                     this.urlToImage=this.News.urlToImage;
                     this.image=this._sanitizer.bypassSecurityTrustStyle(`url(${this.urlToImage})`);
                     this.source=this.News.source.name;
                     this.dt= moment(this.News.publishedAt);
                     this.date= this.dt.format('LLL');
                     this.description=this.News.description;
                     this.content=this.News.content;
                     console.log(this.News);
                     console.log(this.image);
                     console.log(data.articles[1].title);
                    //  console.log(this.INews.articles[1].title);
                     //  console.log(this.INews.article[0].title);
                    //  console.log(data);
                   },
                   error=>{
                     console.log(error.error.message);
                   }
                  )
  };
}
