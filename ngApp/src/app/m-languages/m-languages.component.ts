import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiKeyTestingService} from '../api-key-testing.service';
@Component({
  selector: 'app-m-languages',
  templateUrl: './m-languages.component.html',
  styleUrls: ['./m-languages.component.scss']
})
export class MLanguagesComponent implements OnInit {
  
  constructor(private apiService: ApiKeyTestingService, private router: Router, private route: ActivatedRoute) { }
  
  public windTitle="Languages";  
  public lang=[
    {symbol: 'عربى', language: 'arabic', code: 'ar'},
    {symbol: 'deutsche', language: 'german', code: 'de'},
    {symbol: 'english', language: 'english', code: 'en'},
    {symbol: 'español', language: 'spanish', code: 'es'},
    {symbol: 'עברי', language: 'hebrew', code: 'he'},
    {symbol: 'italiano', language: 'italian', code: 'it'},
    {symbol: 'nederlands', language: 'dutch', code: 'nl'},
    {symbol: 'norsk', language: 'norwegian', code: 'no'},
    {symbol: 'português', language: 'portuguese', code: 'pt'},
    {symbol: 'русский', language: 'russian', code: 'ru'},
    {symbol: '中文', language: 'chinese', code: 'zh'}
    // {language: '', code: ''},
  ];
  public favLang:String="en";
  public selectedItem:any="";

  langFavClick($event, newValue){
    console.log("you click fav");
    this.favLang=newValue.code;
    this.apiService.saveLang(this.favLang);
  }

  listClick(event, newValue) { // don't forget to update the model here
      console.log("Navigate");
      this.router.navigate(["view"], {relativeTo: this.route.parent});
  }  
  ngOnInit() {
  }

}
