import { TestBed } from '@angular/core/testing';

import { ApiKeyTestingService } from './api-key-testing.service';

describe('ApiKeyTestingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiKeyTestingService = TestBed.get(ApiKeyTestingService);
    expect(service).toBeTruthy();
  });
});
