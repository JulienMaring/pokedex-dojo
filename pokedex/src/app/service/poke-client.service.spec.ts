import { TestBed } from '@angular/core/testing';

import { PokeClientService } from './poke-client.service';

describe('PokeClientService', () => {
  let service: PokeClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
