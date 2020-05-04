import { TestBed } from '@angular/core/testing';

import { DataOrderService } from './data-order.service';

describe('DataOrderService', () => {
  let service: DataOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
