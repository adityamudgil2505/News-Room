import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-news-channel',
  templateUrl: './m-news-channel.component.html',
  styleUrls: ['./m-news-channel.component.scss']
})
export class MNewsChannelComponent implements OnInit {

  constructor() { }
  public windTitle:String="News Channel";
  public selectedItem:any="";
  public channel=[
    { name:"ABC News", code:"abc-news"},
    { name:"BBC News", code:"bbc-news"},
    { name:"Bloomberg", code:"bloomberg"},
    { name:"Buzzfeed", code:"buzzfeed"},
    { name:"CBC News", code:"cbc-News"},
    { name:"CNBC", code:"cnbc"},
    { name:"ESPN", code:"espn"},
    { name:"Financial Post", code:"financial-post"},
    { name:"Fox News", code:"fox-news"},
    { name:"Google News", code:"google-news"},
    { name:"IGN", code:"ign"},
    { name:"Marca", code:"marca"},
    { name:"Medical News Today", code:"medical-news-today"},
    { name:"MTV News", code:"mtv-news"},
    { name:"National Geographic", code:"national-geographic"},
    { name:"News 24", code:"news24"},
    { name:"New York Magazine", code:"new-york-magazine"},
    { name:"Reddit", code:"reddit-r-all"},
    { name:"SABQ", code:"sabq"},
    { name:"T3n", code:"t3n"},
    { name:"TalkSport", code:"talksport"},
    { name:"TechCrunch", code:"techcrunch"},
    { name:"The Hill", code:"the-hill"},
    { name:"The Hindu", code:"the-hindu"},
    { name:"The New York Times", code:"the-new-york-times"},
    { name:"The Times of India", code:"the-times-of-india"},
    { name:"USA Today", code:"usa-today"},
    { name:"Vice News", code:"vice-news"}    
  ];
  listClick(event, newValue) {
    this.selectedItem = newValue;  // don't forget to update the model here
    console.log("you clicked");
    console.log(newValue);
  }  
  ngOnInit() {
  }

}
