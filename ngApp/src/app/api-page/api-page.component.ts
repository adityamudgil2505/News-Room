import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiKeyTestingService} from '../api-key-testing.service';
@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit {

  registerForm: FormGroup;
  respond: any;
  public errorMsg: String;
  constructor( private formBuilder: FormBuilder, private apiService: ApiKeyTestingService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      apiKey: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
  save(): void{
    console.log('Api key is ' + this.registerForm.value.apiKey);
    this.apiService.isValidAPI()
                   .subscribe(data=>{
                     this.respond=data;
                     console.log(this.respond);
                  },
                    error=>{
                      this.errorMsg = error.error.message;
                      console.log(this.errorMsg);
                      console.log(error);
                    });    
  }
}
