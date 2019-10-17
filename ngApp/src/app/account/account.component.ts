import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiKeyTestingService } from '../api-key-testing.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor( private apiService: ApiKeyTestingService) { }

  public windTitle:String="Account";
  public yearArr=[];
  public dateArr=[];
  public genderArr=["Male", "Female"];
  public monthArr=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  public accountDetail:any;
  public form:any;
  public model:any;
  ngOnInit() {
    for(let i=2019; i>=1950; i--){ this.yearArr.push(i);}
    for(let i=1; i<=31; i++){ this.dateArr.push(i);}
    this.model=this.apiService.getAccountDetails();
  }
  onSubmit() {
    this.apiService.saveAccountDetail(this.model);
    this.model=this.apiService.getAccountDetails();
    console.log(this.model);
  }
}