import { TestBed } from '@angular/core/testing';

import { GetRestoDataService } from './get-resto-data.service';

describe('GetRestoDataService', () => {
  let service: GetRestoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRestoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
