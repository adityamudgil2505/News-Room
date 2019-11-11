import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import * as moment from 'moment';
import { dirname } from 'path';
@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrls: ['./m-home.component.scss']
})
export class MHomeComponent implements OnInit {
  constructor(private apiService: ApiKeyTestingService, private _sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute){ }
  public news:any=[];
  public address:any;
  public noInternet:Boolean;

  refresh(){
    this.fetchData();
  }

  viewNews($event, newValue){
    newValue.image=this._sanitizer.bypassSecurityTrustStyle(`url(${newValue.urlToImage})`);
    let dt:moment.Moment= moment(newValue.publishedAt);
    newValue.date= dt.format('LLL');

    this.apiService.addNewsToRecent(newValue);
    this.router.navigate(["view"], {relativeTo: this.route.parent});
  }
  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.searchData();
    }
  }
  searchData(){
    const str: string = (document.getElementById("search") as HTMLInputElement).value;
    console.log(str);
    var link:string ="";
    for(let i=0; i<str.length; i++){
      if(str[i]==' '){
        link = link + " AND ";
      }
      else{
        link = link + str[i];
      }
    }
    link=encodeURIComponent(link);
    this.apiService.getSearchedNews(link)
                    .subscribe((data:any)=>{                     
                      this.news=data.articles;
                      for(let i=0; i<this.news.length; i++){
                        if(this.news[i].urlToImage==null){
                          this.news[i].urlToImage=__dirname+"/assets/img/no-image.png";
                        }
                        this.news[i].image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.news[i].urlToImage})`);
                      }
                      this.noInternet=false;
                    },
                    error=>{
                      this.noInternet=true;
                    }
                  )

  }

  fetchData(){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      console.log(params);
      let country=params.get('country');
      let category=params.get('category');
      let lang=params.get('lang');
      let source=params.get('source');
      if(source==null){source='';}
      this.apiService.getNews(lang, country, category, source)
                    .subscribe((data:any)=>{                     
                      this.news=data.articles;
                      for(let i=0; i<this.news.length; i++){
                        if(this.news[i].urlToImage==null){
                          this.news[i].urlToImage=__dirname+"/assets/img/no-image.png";
                        }
                        this.news[i].image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.news[i].urlToImage})`);
                      }
                      this.noInternet=false;
                    },
                    error=>{
                      this.noInternet=true;
                    }
                  )
      }
    )
  }
  ngOnInit() {    
    this.fetchData();
    setInterval(this.fetchData, 300*1000);
  }
}
