import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MHomeComponent } from './m-home.component';

describe('MHomeComponent', () => {
  let component: MHomeComponent;
  let fixture: ComponentFixture<MHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
