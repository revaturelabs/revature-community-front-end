import { TestBed } from '@angular/core/testing';

import { ValidationServiceService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});