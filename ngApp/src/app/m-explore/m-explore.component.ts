import { Component, OnInit } from '@angular/core';
import {ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-m-explore',
  templateUrl: './m-explore.component.html',
  styleUrls: ['./m-explore.component.scss']
})
export class MExploreComponent implements OnInit {

  constructor(private apiService: ApiKeyTestingService, private _sanitizer: DomSanitizer) { }

  public windTitle="Category";  
  public category=[
    {imgLink:'./assets/img/category/business.jpeg', title: 'Business', code: 'business'},
    {imgLink:'./assets/img/category/entertainment.jpeg', title: 'Entertainment', code: 'entertainment'},
    {imgLink:'./assets/img/category/general.jpeg', title: 'General', code: 'general'},
    {imgLink:'./assets/img/category/health.jpeg', title: 'Health', code: 'health'},
    {imgLink:'./assets/img/category/business.jpeg', title: 'Science', code: 'science'},
    {imgLink:'./assets/img/category/sports.jpeg', title: 'Sports', code: 'sports'},
    {imgLink:'./assets/img/category/technology.jpeg', title: 'Technology', code: 'technology'}
  ];
  
  listClick(event, newValue) {
    console.log(newValue);
    // this.selectedItem = newValue;  // don't forget to update the model here
    // this.apiService.saveLang(newValue.code);
    // this.router.navigate(["view"], {relativeTo: this.route.parent});
  } 

  ngOnInit() {
    for(let i=0; i<this.category.length; i++){
      this.category[i].imgLink = (this.category[i].imgLink).toString();
      this.category[i].imgLink = this._sanitizer.bypassSecurityTrustStyle(`url(${this.category[i].imgLink})`);
    }
  }

}
