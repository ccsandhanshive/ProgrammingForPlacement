import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementImportantTopicsComponent } from './placement-important-topics.component';

describe('PlacementImportantTopicsComponent', () => {
  let component: PlacementImportantTopicsComponent;
  let fixture: ComponentFixture<PlacementImportantTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementImportantTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementImportantTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
