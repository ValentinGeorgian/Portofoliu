import { TestBed } from '@angular/core/testing';

import { ServiceHomeProjectService } from './service-home-project.service';

describe('ServiceHomeProjectService', () => {
  let service: ServiceHomeProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHomeProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
