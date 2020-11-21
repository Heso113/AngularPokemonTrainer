import { TestBed } from '@angular/core/testing';

import { TrainercollectionService } from './trainercollection.service';

describe('TrainercollectionService', () => {
  let service: TrainercollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainercollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
