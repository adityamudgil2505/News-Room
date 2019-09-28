import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MExploreComponent } from './m-explore.component';

describe('MExploreComponent', () => {
  let component: MExploreComponent;
  let fixture: ComponentFixture<MExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
