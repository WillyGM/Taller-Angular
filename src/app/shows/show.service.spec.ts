import { TestBed } from '@angular/core/testing';

import { ShowService } from './show.service';

describe('SeriesService', () => {
  let service: ShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });
});
