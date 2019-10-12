import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrls: ['./m-home.component.scss']
})
export class MHomeComponent implements OnInit {
  constructor(private apiService: ApiKeyTestingService, private _sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute){ }
  public news:any=[];
  public address:any;

  viewNews($event, newValue){
    newValue.image=this._sanitizer.bypassSecurityTrustStyle(`url(${newValue.urlToImage})`);
    let dt:moment.Moment= moment(newValue.publishedAt);
    newValue.date= dt.format('LLL');

    this.apiService.addNewsToRecent(newValue);
    this.router.navigate(["view"], {relativeTo: this.route.parent});
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      console.log(params);
      let country=params.get('country');
      let category=params.get('category');
      let lang=params.get('lang');
      let source=params.get('source');
      this.apiService.getNews(lang, country, category, source)
                    .subscribe((data:any)=>{                     
                      this.news=data.articles;
                      for(let i=0; i<this.news.length; i++){
                        this.news[i].image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.news[i].urlToImage})`);
                      }
                    },
                    error=>{
                      console.log(error.error.message);
                    }
                  )
      }
    )
  }
}
