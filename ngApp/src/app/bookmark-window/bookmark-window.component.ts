import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-bookmark-window',
  templateUrl: './bookmark-window.component.html',
  styleUrls: ['./bookmark-window.component.scss']
})
export class BookmarkWindowComponent implements OnInit {

  constructor(private apiService:ApiKeyTestingService, private _sanitizer:DomSanitizer) { }

  windTitle:String="Bookmark";
  bookmarkedArticle:any=[];

  removeBookmark($event, item){
    $event.target.parentNode.parentNode.remove();
    this.apiService.removeNewsFromBookmark(item.publishedAt);
  }

  ngOnInit() {
    this.bookmarkedArticle=this.apiService.getDetails().bookmark;
    for(let i=0; i<this.bookmarkedArticle.length; i++){
      this.bookmarkedArticle[i].urlToImage = this._sanitizer.bypassSecurityTrustStyle(`url(${this.bookmarkedArticle[i].urlToImage})`);
    }

  }
}
