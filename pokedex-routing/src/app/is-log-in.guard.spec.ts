import { TestBed } from '@angular/core/testing';

import { IsLogInGuard } from './is-log-in.guard';

describe('IsLogInGuard', () => {
  let guard: IsLogInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLogInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
