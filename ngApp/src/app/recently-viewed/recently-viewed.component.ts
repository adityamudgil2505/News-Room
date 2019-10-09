import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer} from '@angular/platform-browser';
import { Router, ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  constructor(private apiService:ApiKeyTestingService, private _sanitizer:DomSanitizer, private router: Router, private route: ActivatedRoute) { }
  
  public windTitle:String="Recently Viewed";
  recentArticle:any=[];

  viewNews($event, newValue){
    newValue.image=this._sanitizer.bypassSecurityTrustStyle(`url(${newValue.urlToImage})`);
    this.apiService.addNewsToRecent(newValue);
    this.router.navigate(["view"], {relativeTo: this.route.parent});
  }

  ngOnInit() {
    this.recentArticle=this.apiService.getDetails().recent;
    for(let i=0; i<this.recentArticle.length; i++){
      this.recentArticle[i].image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.recentArticle[i].urlToImage})`);
    }
  }

}
