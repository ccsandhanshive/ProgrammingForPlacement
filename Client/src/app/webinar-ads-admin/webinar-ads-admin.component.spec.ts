import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarAdsAdminComponent } from './webinar-ads-admin.component';

describe('WebinarAdsAdminComponent', () => {
  let component: WebinarAdsAdminComponent;
  let fixture: ComponentFixture<WebinarAdsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarAdsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarAdsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
