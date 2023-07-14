import { TestBed } from '@angular/core/testing';

import { MockAuthentificationService } from './mock-authentification.service';

describe('MockAuthentificationService', () => {
  let service: MockAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
