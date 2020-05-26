import { TestBed } from '@angular/core/testing';

import { Flurry.Service.TsService } from './flurry.service.ts.service';

describe('Flurry.Service.TsService', () => {
  let service: Flurry.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flurry.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
