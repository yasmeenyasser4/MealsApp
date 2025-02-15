import { TestBed } from '@angular/core/testing';

import { OnemealService } from './onemeal.service';

describe('OnemealService', () => {
  let service: OnemealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnemealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
