import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router, NavigationEnd } from '@angular/router';
import { Location} from '@angular/common';
import { ApiKeyTestingService} from '../api-key-testing.service';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  public previousUrl:String;
  public currentUrl:String;

  constructor(private router: Router, private route: ActivatedRoute, private _location: Location, private apiService: ApiKeyTestingService) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  goBack($event){
    let endAdd = this.currentUrl.split('/');
    endAdd=endAdd[2].split(';');
    console.log(endAdd);
    if(this.previousUrl!=undefined && (endAdd[0]=='home' || endAdd[0]=='view')){
      this._location.back();
    }
  }
  goForward($event){
    this._location.forward();
  }

  public subNavItem = [
    {icon: 'home', title: 'Home', link: 'home'},
    {icon: 'explore', title: 'Browse', link: 'explore'},
    {icon: 'language', title: 'Language', link: 'languages'},
    {icon: 'rss_feed', title: 'News Channel', link: 'newsChannel'},
    {icon: 'flag', title: 'Country', link: 'country'},
  ]
  public subNavUserItem = [
    {title: 'Recently Viewed', link: 'recently'},
    {title: 'Bookmark', link: 'bookmark'},
    {title: 'Account', link: 'account'}
  ]

  public selectedItem:String="Home";
  public selectedItemDetail:any;
  public userDetails:any;

  callNotification(lang:String, country: String, category:String):void{
    let news:any;
    this.apiService.getNews(lang, country, category, '')
                   .subscribe((data:any)=>{
                      news=data.articles[0];
                        let obj={
                            source: news.source.name,
                            body: news.title
                        }
                        this.apiService.notify(obj);
                   })    
  }
  
  ngOnInit() {
    this.userDetails = this.apiService.getDetails();
    let lang = this.userDetails.lang;
    let country = this.userDetails.country;
    let category = this.userDetails.category;
    console.log(this.userDetails);
    setInterval(()=>this.callNotification(lang, country, category), 12000);
  }
  listClick(event, newValue) {
      console.log(newValue);
      this.selectedItem = newValue.title;
      this.selectedItemDetail = newValue;
      this.router.navigate([this.selectedItemDetail.link], {relativeTo: this.route});
      // ... do other stuff here ...
  }
}
