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
    {symbol: 'مرحبا', language: 'arabic', code: 'ar'},
    {symbol: 'Hallo', language: 'german', code: 'de'},
    {symbol: 'Hello', language: 'english', code: 'en'},
    {symbol: 'Hola', language: 'spanish', code: 'es'},
    {symbol: 'שלום', language: 'hebrew', code: 'he'},
    {symbol: 'Ciao', language: 'italian', code: 'it'},
    {symbol: 'Hallo', language: 'dutch', code: 'nl'},
    {symbol: 'Hallo', language: 'norwegian', code: 'no'},
    {symbol: 'Olá', language: 'portuguese', code: 'pt'},
    {symbol: 'Привет', language: 'russian', code: 'ru'},
    {symbol: '你好', language: 'chinese', code: 'zh'}
    // {language: '', code: ''},
  ];
  public selectedItem:any="";
  listClick(event, newValue) {
      console.log(newValue);
      this.selectedItem = newValue;  // don't forget to update the model here
      // this.apiService.saveLang(newValue.code);
      this.router.navigate(["view"], {relativeTo: this.route.parent});
  }  
  ngOnInit() {
  }

}
