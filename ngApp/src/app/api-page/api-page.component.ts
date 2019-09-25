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
  respond: any = [];
  public errorMsg: any;
  constructor( private formBuilder: FormBuilder, private apiService: ApiKeyTestingService) { }

  ngOnInit() {
    this.apiService.isValidAPI()
                   .subscribe(data=> this.respond=data,
                              error=> this.errorMsg=error);
    this.registerForm = this.formBuilder.group({
      apiKey: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
  save(): void{
    console.log('Api key is ' + this.registerForm.value.apiKey);
    console.log(this.respond);
  }
}
