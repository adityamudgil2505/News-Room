import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ApiKeyTestingService} from '../api-key-testing.service';
@Component({
  selector: 'app-no-internet',
  templateUrl: './no-internet.component.html',
  styleUrls: ['./no-internet.component.scss']
})
export class NoInternetComponent implements OnInit {

  constructor(private router: Router, private apiService:ApiKeyTestingService, private route:ActivatedRoute) { }
  refresh(){
    let userData = this.apiService.getDetails();
    this.apiService.setAPI(userData.apiKey);
    this.apiService.isValidAPI()
        .subscribe(data=>{
          this.apiService.saveAPI();
          this.router.navigate(['/main/home'], {relativeTo:this.route.parent});
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
  }

}
