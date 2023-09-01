import { TestBed } from '@angular/core/testing';

import { FoodService } from './product.service';

describe('ProductService', () => {
  let service: FoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
