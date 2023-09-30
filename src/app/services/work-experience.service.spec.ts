import { TestBed } from '@angular/core/testing';

import { WorkExperienceService } from './work-experience.service';

describe('WorkExperienceService', () => {
  let service: WorkExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkExperienceService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
