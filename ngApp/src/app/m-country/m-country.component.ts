import { Component, OnInit } from '@angular/core';
import { ApiKeyTestingService} from '../api-key-testing.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-m-country',
  templateUrl: './m-country.component.html',
  styleUrls: ['./m-country.component.scss']
})
export class MCountryComponent implements OnInit {

  constructor(private apiService:ApiKeyTestingService, private router:Router, private route:ActivatedRoute) { }
  
  public windTitle:String="Country";
  public country=[
      {code: "ar", title: "Argentina", flagLink: "./assets/img/flags/ar.svg"},
      {code: "au", title: "Australia", flagLink: "./assets/img/flags/au.svg"},
      {code: "at", title: "Austria", flagLink: "./assets/img/flags/at.svg"},
      {code: "be", title: "Belgium", flagLink: "./assets/img/flags/be.svg"},
      {code: "br", title: "Brazil", flagLink: "./assets/img/flags/br.svg"},
      {code: "bg", title: "Bulgaria", flagLink: "./assets/img/flags/bg.svg"},
      {code: "ca", title: "Canada", flagLink: "./assets/img/flags/ca.svg"},
      {code: "cn", title: "China", flagLink: "./assets/img/flags/cn.svg"},
      {code: "co", title: "Colombia", flagLink: "./assets/img/flags/co.svg"},
      {code: "cu", title: "Cuba", flagLink: "./assets/img/flags/cu.svg"},
      {code: "cz", title: "Czech Republic", flagLink: "./assets/img/flags/cz.svg"},
      {code: "eg", title: "Egypt", flagLink: "./assets/img/flags/eg.svg"},
      {code: "fr", title: "France", flagLink: "./assets/img/flags/fr.svg"},
      {code: "de", title: "Germany", flagLink: "./assets/img/flags/de.svg"},
      {code: "gr", title: "Greece", flagLink: "./assets/img/flags/gr.svg"},
      {code: "hk", title: "Hong Kong", flagLink: "./assets/img/flags/hk.svg"},
      {code: "hu", title: "Hungary", flagLink: "./assets/img/flags/hu.svg"},
      {code: "in", title: "India", flagLink: "./assets/img/flags/in.svg"},
      {code: "id", title: "Indonesia", flagLink: "./assets/img/flags/id.svg"},
      {code: "ie", title: "Ireland", flagLink: "./assets/img/flags/ie.svg"},
      {code: "il", title: "Israel", flagLink: "./assets/img/flags/il.svg"},
      {code: "it", title: "Italy", flagLink: "./assets/img/flags/it.svg"},
      {code: "jp", title: "Japan", flagLink: "./assets/img/flags/jp.svg"},
      {code: "lv", title: "Latvia", flagLink: "./assets/img/flags/lv.svg"},
      {code: "lt", title: "Lithuania", flagLink: "./assets/img/flags/lt.svg"},
      {code: "my", title: "Malaysia", flagLink: "./assets/img/flags/my.svg"},
      {code: "mx", title: "Mexico", flagLink: "./assets/img/flags/mx.svg"},
      {code: "ma", title: "Morocco", flagLink: "./assets/img/flags/ma.svg"},
      {code: "nl", title: "Netherlands", flagLink: "./assets/img/flags/nl.svg"},
      {code: "nz", title: "New Zealand", flagLink: "./assets/img/flags/nz.svg"},
      {code: "ng", title: "Nigeria", flagLink: "./assets/img/flags/ng.svg"},
      {code: "no", title: "Norway", flagLink: "./assets/img/flags/no.svg"},
      {code: "ph", title: "Philippines", flagLink: "./assets/img/flags/ph.svg"},
      {code: "pl", title: "Poland", flagLink: "./assets/img/flags/pl.svg"},
      {code: "pt", title: "Portugal", flagLink: "./assets/img/flags/pt.svg"},
      {code: "ro", title: "Romania", flagLink: "./assets/img/flags/ro.svg"},
      {code: "ru", title: "Russia", flagLink: "./assets/img/flags/ru.svg"},
      {code: "sa", title: "Saudi Arabia", flagLink: "./assets/img/flags/sa.svg"},
      {code: "rs", title: "Serbia", flagLink: "./assets/img/flags/rs.svg"},
      {code: "sg", title: "Singapore", flagLink: "./assets/img/flags/sg.svg"},
      {code: "sk", title: "Slovakia", flagLink: "./assets/img/flags/sk.svg"},
      {code: "si", title: "Slovenia", flagLink: "./assets/img/flags/si.svg"},
      {code: "za", title: "South Africa", flagLink: "./assets/img/flags/za.svg"},
      {code: "kr", title: "South Korea", flagLink: "./assets/img/flags/kr.svg"},
      {code: "se", title: "Sweden", flagLink: "./assets/img/flags/se.svg"},
      {code: "ch", title: "Switzerland", flagLink: "./assets/img/flags/ch.svg"},
      {code: "tw", title: "Taiwan", flagLink: "./assets/img/flags/tw.svg"},
      {code: "th", title: "Thailand", flagLink: "./assets/img/flags/th.svg"},
      {code: "tr", title: "Turkey", flagLink: "./assets/img/flags/tr.svg"},
      {code: "ae", title: "UAE", flagLink: "./assets/img/flags/ae.svg"},
      {code: "ua", title: "Ukraine", flagLink: "./assets/img/flags/ua.svg"},
      {code: "gb", title: "United Kingdom", flagLink: "./assets/img/flags/gb.svg"},
      {code: "us", title: "United States", flagLink: "./assets/img/flags/us.svg"},
      {code: "ve", title: "Venuzuela", flagLink: "./assets/img/flags/ve.svg"},
  ]
  public favCountry:String="";
  public details:any=[];

  countryFavClick(event, newValue) {
    console.log(newValue);
    this.favCountry = newValue.code;  // don't forget to update the model here
    this.apiService.saveCountry(newValue.code);
    // this.router.navigate(["view"], {relativeTo: this.route.parent});
  }  

  countryClick(event, newValue) {
    this.router.navigate(["home",{ lang:this.details.lang, country:newValue.code, category:''}], {relativeTo: this.route.parent});
  }  
  
  ngOnInit() {
    this.details = this.apiService.getDetails();
    this.favCountry = this.details.country;
  }

}