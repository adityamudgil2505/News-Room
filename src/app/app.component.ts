import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // require('dotenv').config();
  // const request = require('request');
  // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`

  // const title = document.getElementById("title");
  // const description = document.getElementById("description")

  // request.get(url, (error, response, body)=>{
  //   body = JSON.parse(body);
  //   title.innerHTML = body.articles[0].title;
  //   description.innerHTML = body.articles[0].description;
  // })
}
