import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsAdminComponent } from './company-details-admin.component';

describe('CompanyDetailsAdminComponent', () => {
  let component: CompanyDetailsAdminComponent;
  let fixture: ComponentFixture<CompanyDetailsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
