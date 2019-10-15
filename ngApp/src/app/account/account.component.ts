import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  public windTitle:String="Account";
  public yearArr=[];
  public dateArr=[];
  ngOnInit() {
    for(let i=2019; i>=1900; i--){  this.yearArr.push(i);}
    for(let i=1; i<=31; i++){  this.dateArr.push(i);}
  }
}
