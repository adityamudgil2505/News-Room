import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkWindowComponent } from './bookmark-window.component';

describe('BookmarkWindowComponent', () => {
  let component: BookmarkWindowComponent;
  let fixture: ComponentFixture<BookmarkWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
