import { TestBed } from '@angular/core/testing';

import { IsharedService } from './ishared.service';

describe('IsharedService', () => {
  let service: IsharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
