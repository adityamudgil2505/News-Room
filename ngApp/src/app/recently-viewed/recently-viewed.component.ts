import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer} from '@angular/platform-browser';
import { from } from 'rxjs';
@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent implements OnInit {
  constructor(private apiService:ApiKeyTestingService, private _sanitizer:DomSanitizer) { }
  
  public windTitle:String="Recently Viewed";
  recentArticle:any=[];

  ngOnInit() {
    this.recentArticle=this.apiService.getDetails().recent;
    for(let i=0; i<this.recentArticle.length; i++){
      this.recentArticle[i].urlToImage = this._sanitizer.bypassSecurityTrustStyle(`url(${this.recentArticle[i].urlToImage})`);
      this.recentArticle[i].source = this.recentArticle[i].source.name;
    }
  }

}
