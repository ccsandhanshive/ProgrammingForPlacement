import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTipsAdminComponent } from './placement-tips-admin.component';

describe('PlacementTipsAdminComponent', () => {
  let component: PlacementTipsAdminComponent;
  let fixture: ComponentFixture<PlacementTipsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementTipsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementTipsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
