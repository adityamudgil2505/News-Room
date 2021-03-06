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
  public loadingImage:string = '../../assets/img/loading.gif';
  public filterOption:Boolean=false;
  public filterSort:string="";
  public moreNewsOption:Boolean=true;
  public previousLink:string='headline';
  public noNewsFound:Boolean=false;
  public notificationImg: string = 'https://ps.w.org/dummy-images/assets/banner-772x250.png?rev=2024916';

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

  closeNotification($event){
    $event.target.parentNode.parentNode.parentNode.remove();
    // call to the in app file not to repeat.
  }

  moreNewsFunction(){
    this.moreNewsOption=false;
    if(this.previousLink == 'headline'){  
      this.fetchData("50");
    }
    else{       
      this.searchData(this.filterSort, "50");
    }
  }

  searchData(filter="", pageSize="20"){
    const str: string = (document.getElementById("search") as HTMLInputElement).value;
    this.filterSort = filter;
    this.previousLink = 'everything';
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
    this.apiService.getSearchedNews(link, filter, pageSize)
                    .subscribe((data:any)=>{                     
                      this.news=data.articles;
                      console.log(this.news.length);
                      if(pageSize=="20"){ this.moreNewsOption = true;}
                      if(this.news.length==0){
                        this.moreNewsOption=false;
                        this.noNewsFound = true;
                      }
                      else{
                        this.noNewsFound = false;
                      }
                      for(let i=0; i<this.news.length; i++){
                        if(this.news[i].urlToImage==null){
                          this.news[i].urlToImage="./assets/img/no-image.png";
                        }
                        // this.news[i].image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.news[i].urlToImage})`);
                        this.news[i].image = this.news[i].urlToImage; // for lazy loading
                      }
                      this.noInternet=false;
                      this.filterOption=true;
                    },
                    error=>{
                      this.noInternet=true;
                    }
                  )

  }

  fetchData(pageSize="20"){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      if(pageSize=="20"){ this.moreNewsOption = true;}
      let country=params.get('country');
      let category=params.get('category');
      let lang=params.get('lang');
      let source=params.get('source');
      if(source==null){source='';}
      this.apiService.getNews(lang, country, category, source, pageSize)
                    .subscribe((data:any)=>{                     
                      this.news=data.articles;
                      if(this.news.length==0){
                        this.noNewsFound = true;
                      }
                      else{
                        this.noNewsFound = false;
                      }
                      for(let i=0; i<this.news.length; i++){
                        if(this.news[i].urlToImage==null){
                          this.news[i].urlToImage="./assets/img/no-image.png";
                        }
                        this.news[i].image = this.news[i].urlToImage;
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
  }
}
