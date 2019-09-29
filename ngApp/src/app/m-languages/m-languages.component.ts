import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-languages',
  templateUrl: './m-languages.component.html',
  styleUrls: ['./m-languages.component.scss']
})
export class MLanguagesComponent implements OnInit {
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
      // this.router.navigate([this.selectedItem.link], {relativeTo: this.route});
      // ... do other stuff here ...
  }
  constructor() { }

  ngOnInit() {
  }

}
