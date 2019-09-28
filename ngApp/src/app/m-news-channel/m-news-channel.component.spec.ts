import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MNewsChannelComponent } from './m-news-channel.component';

describe('MNewsChannelComponent', () => {
  let component: MNewsChannelComponent;
  let fixture: ComponentFixture<MNewsChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MNewsChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MNewsChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
