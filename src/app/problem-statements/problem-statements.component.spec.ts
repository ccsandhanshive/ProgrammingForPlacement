import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemStatementsComponent } from './problem-statements.component';

describe('ProblemStatementsComponent', () => {
  let component: ProblemStatementsComponent;
  let fixture: ComponentFixture<ProblemStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
