import { TestBed } from '@angular/core/testing';

import { ChildLoggerService } from './child-logger.service';

describe('ChildLoggerService', () => {
  let service: ChildLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
