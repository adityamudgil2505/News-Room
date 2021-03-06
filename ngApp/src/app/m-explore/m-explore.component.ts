import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml, SafeScript, SafeStyle} from '@angular/platform-browser';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-m-explore',
  templateUrl: './m-explore.component.html',
  styleUrls: ['./m-explore.component.scss']
})
export class MExploreComponent implements OnInit {

  constructor(private apiService: ApiKeyTestingService, private _sanitizer: DomSanitizer, private router:Router, private route:ActivatedRoute) { }

  public windTitle="Explore";  
  public userDetails:any;
  public category=[
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/business.jpeg)`), title: 'Business', code: 'business'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/entertainment.jpeg)`), title: 'Entertainment', code: 'entertainment'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/general.jpeg)`), title: 'General', code: 'general'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/health.jpeg)`), title: 'Health', code: 'health'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/science.jpeg)`), title: 'Science', code: 'science'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/sports.jpeg)`), title: 'Sports', code: 'sports'},
    {imgLink:this._sanitizer.bypassSecurityTrustStyle(`url(./assets/img/category/technology.jpeg)`), title: 'Technology', code: 'technology'}
  ];
  public favCategory:String="general";

  categoryFavClick($event, newValue){
    this.favCategory=newValue.code;
    this.apiService.saveCategory(this.favCategory);
  }
  
  listClick(event, newValue) {
    console.log(newValue);
    this.router.navigate(["home",{ lang:this.userDetails.lang, country:this.userDetails.country, category:newValue.code}], {relativeTo: this.route.parent});
  } 

  initializeFavCategory(){
    this.userDetails=this.apiService.getDetails();
    this.favCategory=this.userDetails.category;
  }

  ngOnInit() {
    this.initializeFavCategory();
    for(let i=0; i<this.category.length; i++){
      // this.category[i].imgLink = this.transform(`url(${this.category[i].imgLink})`, typeof(`url(${this.category[i].imgLink})`)) ;
    }
  }

}
