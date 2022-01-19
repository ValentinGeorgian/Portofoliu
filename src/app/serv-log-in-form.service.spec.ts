import { TestBed } from '@angular/core/testing';

import { ServLogInFormService } from './serv-log-in-form.service';

describe('ServLogInFormService', () => {
  let service: ServLogInFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServLogInFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
