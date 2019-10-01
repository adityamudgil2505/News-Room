import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewModeComponent } from './news-view-mode.component';

describe('NewsViewModeComponent', () => {
  let component: NewsViewModeComponent;
  let fixture: ComponentFixture<NewsViewModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsViewModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsViewModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
