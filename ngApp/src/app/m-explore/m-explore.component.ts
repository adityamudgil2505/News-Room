import { Component, OnInit } from '@angular/core';
import {ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml, SafeScript, SafeStyle} from '@angular/platform-browser';
@Component({
  selector: 'app-m-explore',
  templateUrl: './m-explore.component.html',
  styleUrls: ['./m-explore.component.scss']
})
export class MExploreComponent implements OnInit {

  constructor(private apiService: ApiKeyTestingService, private _sanitizer: DomSanitizer) { }

  public windTitle="Explore";  
  public category=[
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/business.jpeg)`), title: 'Business', code: 'business'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/entertainment.jpeg)`), title: 'Entertainment', code: 'entertainment'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/general.jpeg)`), title: 'General', code: 'general'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/health.jpeg)`), title: 'Health', code: 'health'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/science.jpeg)`), title: 'Science', code: 'science'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/sports.jpeg)`), title: 'Sports', code: 'sports'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/technology.jpeg)`), title: 'Technology', code: 'technology'}
  ];
  
  listClick(event, newValue) {
    console.log(newValue);
    // this.selectedItem = newValue;  // don't forget to update the model here
    // this.apiService.saveLang(newValue.code);
    // this.router.navigate(["view"], {relativeTo: this.route.parent});
  } 
  ngOnInit() {
    for(let i=0; i<this.category.length; i++){
      // this.category[i].imgLink = this.transform(`url(${this.category[i].imgLink})`, typeof(`url(${this.category[i].imgLink})`)) ;
    }
  }

}
