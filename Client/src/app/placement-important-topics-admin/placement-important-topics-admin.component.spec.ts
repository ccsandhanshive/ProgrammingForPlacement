import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementImportantTopicsAdminComponent } from './placement-important-topics-admin.component';

describe('PlacementImportantTopicsAdminComponent', () => {
  let component: PlacementImportantTopicsAdminComponent;
  let fixture: ComponentFixture<PlacementImportantTopicsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementImportantTopicsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementImportantTopicsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
