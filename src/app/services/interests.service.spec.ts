import { TestBed } from '@angular/core/testing';

import { InterestsService } from './interests.service';

describe('InterestsService', () => {
  let service: InterestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestsService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
