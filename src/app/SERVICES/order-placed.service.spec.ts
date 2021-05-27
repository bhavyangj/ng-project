import { TestBed } from '@angular/core/testing';

import { OrderPlacedService } from './order-placed.service';

describe('OrderPlacedService', () => {
  let service: OrderPlacedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderPlacedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
