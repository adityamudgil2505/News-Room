import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIPageComponent } from './api-page.component';

describe('APIPageComponent', () => {
  let component: APIPageComponent;
  let fixture: ComponentFixture<APIPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
