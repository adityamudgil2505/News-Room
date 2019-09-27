import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiKeyTestingService} from '../api-key-testing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit {

  registerForm: FormGroup;
  public errorMsg: String;
  constructor( private formBuilder: FormBuilder, private apiService: ApiKeyTestingService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      apiKey: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  // This will remove the error of invalid api key if we clicked input field 
  clearErrorMsg():void {
    this.errorMsg="";
  }

  // This function will handle our api key 
  // If invalid then will show error message
  // If valid then will save api key to configuration file and proceed to next page
  save(): void{
    console.log('Api key is ' + this.registerForm.value.apiKey);
    this.apiService.setAPI(this.registerForm.value.apiKey);
    this.apiService.isValidAPI()
                   .subscribe(data=>{
                     this.apiService.saveAPI();
                     this.router.navigate(['/main']);
                  },
                    error=>{
                      this.errorMsg = error.error.message;
                    });    
  }
}
