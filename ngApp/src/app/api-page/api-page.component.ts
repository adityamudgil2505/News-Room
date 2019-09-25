import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit {

  registerForm: FormGroup;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      apiKey: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
  save(): void{
    console.log('Api key is ' + this.registerForm.value.apiKey);
  }
}
