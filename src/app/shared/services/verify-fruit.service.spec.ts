import { TestBed } from '@angular/core/testing';

import { VerifyFruitService } from './verify-fruit.service';

describe('VerifyFruitService', () => {
  let service: VerifyFruitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyFruitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
