import { TestBed } from '@angular/core/testing';

import { AddProblemStatementService } from './add-problem-statement.service';

describe('AddProblemStatementService', () => {
  let service: AddProblemStatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProblemStatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
