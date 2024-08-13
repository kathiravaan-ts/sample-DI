import { TestBed } from '@angular/core/testing';

import { DuplicateLoggerService } from './duplicate-logger.service';

describe('DuplicateLoggerService', () => {
  let service: DuplicateLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuplicateLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
