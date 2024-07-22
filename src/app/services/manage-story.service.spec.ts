import { TestBed } from '@angular/core/testing';

import { ManageStoryService } from './manage-story.service';

describe('ManageStoryService', () => {
  let service: ManageStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
