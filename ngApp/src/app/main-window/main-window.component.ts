import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  public subNavItem = [
    {icon: 'home', title: 'Home', link: 'home'},
    {icon: 'explore', title: 'Browse', link: 'explore'},
    {icon: 'language', title: 'Language', link: 'languages'},
    {icon: 'rss_feed', title: 'News Channel', link: 'newsChannel'},
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
      this.router.navigate([this.selectedItem.link], {relativeTo: this.route});
      // ... do other stuff here ...
  }
}
