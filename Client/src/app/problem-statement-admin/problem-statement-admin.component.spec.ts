import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemStatementAdminComponent } from './problem-statement-admin.component';

describe('ProblemStatementAdminComponent', () => {
  let component: ProblemStatementAdminComponent;
  let fixture: ComponentFixture<ProblemStatementAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemStatementAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemStatementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
