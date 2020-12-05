import { TestBed } from '@angular/core/testing';

import { GalaxyCommonsService } from './galaxy-commons.service';

describe('GalaxyCommonsService', () => {
  let service: GalaxyCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalaxyCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
