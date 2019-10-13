import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiKeyTestingService} from '../api-key-testing.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor(private router: Router, private apiService:ApiKeyTestingService) { }

  checkAPIKey(){
    let userData = this.apiService.getDetails();
    this.apiService.setAPI(userData.apiKey);
    this.apiService.isValidAPI()
        .subscribe(data=>{
          this.apiService.saveAPI();
          this.router.navigate(['/main/home']);
        },
        err=>{
          console.log(err);
          if(err.status==401){
            this.router.navigate(['/apikey']);
          }
          else if(err.status==0){
            this.router.navigate(['/noInternet']);
          }          
        });   
  }

  ngOnInit() {
    console.log(window.location.href);

    console.log(window.location.href+'apikey');
    setTimeout(()=>{
      this.checkAPIKey();
    }, 5000);
  }

}
