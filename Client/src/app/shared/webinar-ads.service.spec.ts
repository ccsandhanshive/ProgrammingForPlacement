import { TestBed } from '@angular/core/testing';

import { WebinarAdsService } from './webinar-ads.service';

describe('WebinarAdsService', () => {
  let service: WebinarAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebinarAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
