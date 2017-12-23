import { TestBed, inject } from '@angular/core/testing';

import { OmiseRequestService } from './omise-request.service';

describe('OmiseRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OmiseRequestService]
    });
  });

  it('should be created', inject([OmiseRequestService], (service: OmiseRequestService) => {
    expect(service).toBeTruthy();
  }));
});
