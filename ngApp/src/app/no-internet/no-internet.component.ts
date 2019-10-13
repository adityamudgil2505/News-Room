import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-no-internet',
  templateUrl: './no-internet.component.html',
  styleUrls: ['./no-internet.component.scss']
})
export class NoInternetComponent implements OnInit {

  constructor(private _location: Location) { }
  refresh(){
    this._location.back();
  }
  ngOnInit() {
  }

}
