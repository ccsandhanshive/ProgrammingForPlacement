import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingWindowComponent } from './programming-window.component';

describe('ProgrammingWindowComponent', () => {
  let component: ProgrammingWindowComponent;
  let fixture: ComponentFixture<ProgrammingWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
