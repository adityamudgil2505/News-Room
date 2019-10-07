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
    {icon: 'flag', title: 'Country', link: 'country'},
  ]
  public subNavUserItem = [
    {title: 'Recently Viewed', link: 'recently'},
    {title: 'Bookmark', link: 'bookmark'},
    {title: 'Account'}
  ]

  public selectedItem:String="Home";
  public selectedItemDetail:any;
  
  ngOnInit() {

  }
  listClick(event, newValue) {
      console.log(newValue);
      this.selectedItem = newValue.title;
      this.selectedItemDetail = newValue;
      this.router.navigate([this.selectedItemDetail.link], {relativeTo: this.route});
      // ... do other stuff here ...
  }
}
