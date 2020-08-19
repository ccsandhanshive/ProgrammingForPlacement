import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTipsComponent } from './placement-tips.component';

describe('PlacementTipsComponent', () => {
  let component: PlacementTipsComponent;
  let fixture: ComponentFixture<PlacementTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
