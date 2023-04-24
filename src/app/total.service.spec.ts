import { TestBed } from '@angular/core/testing';

import { TotalService } from './total.service';

describe('TotalService', () => {
  let service: TotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
