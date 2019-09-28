import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  constructor() { }
  public subNavItem = [
    {icon: 'home', title: 'Home'},
    {icon: 'explore', title: 'Browse'},
    {icon: 'language', title: 'Language'},
    {icon: 'rss_feed', title: 'News Channel'},
  ]
  public subNavUserItem = [
    {title: 'Recently Viewed'},
    {title: 'Bookmark'},
    {title: 'Account'}
  ]

  public selectedItem:any="";
  
  ngOnInit() {

  }
  listClick(event, newValue) {
      console.log(newValue);
      this.selectedItem = newValue;  // don't forget to update the model here
      // ... do other stuff here ...
  }
}
