import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  constructor() { 
  }
  ngOnInit() {
    const bgImg = document.getElementsByTagName('img')[0];
    setTimeout(()=>{
      bgImg.parentNode.removeChild(bgImg);
    }, 3000);
  }

}
