import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class APIPageComponent implements OnInit {
  public apiKey;
  constructor() { }

  ngOnInit() {
    
  }
  saveAPIKey(){
    console.log(this.apiKey);
  }
}
