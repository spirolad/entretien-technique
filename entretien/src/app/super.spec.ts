import { TestBed } from '@angular/core/testing';

import { Super } from './super';

describe('Super', () => {
  let service: Super;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Super);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
