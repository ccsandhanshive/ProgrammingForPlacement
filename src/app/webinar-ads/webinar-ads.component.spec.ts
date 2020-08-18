import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarAdsComponent } from './webinar-ads.component';

describe('WebinarAdsComponent', () => {
  let component: WebinarAdsComponent;
  let fixture: ComponentFixture<WebinarAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
