import { TestBed } from '@angular/core/testing';

import { PlacementImportantTopicsService } from './placement-important-topics.service';

describe('PlacementImportantTopicsService', () => {
  let service: PlacementImportantTopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacementImportantTopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
