import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer} from '@angular/platform-browser';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bookmark-window',
  templateUrl: './bookmark-window.component.html',
  styleUrls: ['./bookmark-window.component.scss']
})
export class BookmarkWindowComponent implements OnInit {

  constructor(private apiService:ApiKeyTestingService, private _sanitizer:DomSanitizer, private router: Router, private route: ActivatedRoute) { }

  windTitle:String="Bookmark";
  bookmarkedArticle:any=[];

  removeBookmark($event, item){
    $event.target.parentNode.parentNode.remove();
    this.apiService.removeNewsFromBookmark(item.publishedAt);
  }

  viewNews($event, newValue){
    newValue.image=this._sanitizer.bypassSecurityTrustStyle(`url(${newValue.urlToImage})`);
    this.apiService.addNewsToRecent(newValue);
    this.router.navigate(["view"], {relativeTo: this.route.parent});
  }

  ngOnInit() {
    this.bookmarkedArticle=this.apiService.getDetails().bookmark;
    for(let i=0; i<this.bookmarkedArticle.length; i++){
      this.bookmarkedArticle[i].image = this._sanitizer.bypassSecurityTrustStyle(`url(${this.bookmarkedArticle[i].urlToImage})`);
    }

  }
}
