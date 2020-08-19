import { TestBed } from '@angular/core/testing';

import { ProblemStatementsService } from './problem-statements.service';

describe('ProblemStatementsService', () => {
  let service: ProblemStatementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemStatementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
