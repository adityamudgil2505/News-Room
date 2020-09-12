import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer} from '@angular/platform-browser';
import { Router, ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['../bookmark-window/bookmark-window.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  constructor(private apiService:ApiKeyTestingService, private _sanitizer:DomSanitizer, private router: Router, private route: ActivatedRoute) { }
  
  public windTitle:String="Recently Viewed";
  public loadingImage:string = '../../assets/img/loading.gif';
  recentArticle:any=[];

  viewNews($event, newValue){
    this.apiService.addNewsToRecent(newValue);
    this.router.navigate(["view"], {relativeTo: this.route.parent});
  }

  ngOnInit() {
    this.recentArticle=this.apiService.getDetails().recent;
  }

}
