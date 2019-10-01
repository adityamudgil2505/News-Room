import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { Router } from '@angular/router';
import { INews} from '../news';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-news-view-mode',
  templateUrl: './news-view-mode.component.html',
  styleUrls: ['./news-view-mode.component.scss']
})
export class NewsViewModeComponent implements OnInit {

  constructor(private apiService: ApiKeyTestingService, private router: Router, private _sanitizer: DomSanitizer) { }
  public INews=[];
  public title:String;
  public urlToImage:String;
  public image:any;
  public source:String;
  public date:String;
  public description:String;
  public content:String;
  ngOnInit() {
    this.apiService.isValidAPI()
                   .subscribe(data=>{                     
                     this.INews=data.articles[5];
                     this.title=this.INews.title;
                     this.urlToImage=this.INews.urlToImage;
                     this.image=this._sanitizer.bypassSecurityTrustStyle(`url(${this.urlToImage})`);
                     this.source=this.INews.source.name;
                     this.date=this.INews.publishedAt;
                     this.description=this.INews.description;
                     this.content=this.INews.content;
                     console.log(this.INews);
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
