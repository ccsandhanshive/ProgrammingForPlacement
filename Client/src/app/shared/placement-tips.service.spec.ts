import { TestBed } from '@angular/core/testing';

import { PlacementTipsService } from './placement-tips.service';

describe('PlacementTipsService', () => {
  let service: PlacementTipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacementTipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
