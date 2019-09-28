import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLanguagesComponent } from './m-languages.component';

describe('MLanguagesComponent', () => {
  let component: MLanguagesComponent;
  let fixture: ComponentFixture<MLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
