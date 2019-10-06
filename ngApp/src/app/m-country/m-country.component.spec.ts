import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCountryComponent } from './m-country.component';

describe('MCountryComponent', () => {
  let component: MCountryComponent;
  let fixture: ComponentFixture<MCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
