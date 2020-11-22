import { TestBed } from '@angular/core/testing';

import { MyAppCommonsService } from './my-app-commons.service';

describe('MyAppCommonsService', () => {
  let service: MyAppCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAppCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
