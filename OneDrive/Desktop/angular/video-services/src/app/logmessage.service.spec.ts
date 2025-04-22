import { TestBed } from '@angular/core/testing';

import { LogmessageService } from './logmessage.service';

describe('LogmessageService', () => {
  let service: LogmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
