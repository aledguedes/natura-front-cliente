import { TestBed } from '@angular/core/testing';

import { ProcurabykeyService } from './procurabykey.service';

describe('ProcurabykeyService', () => {
  let service: ProcurabykeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcurabykeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
