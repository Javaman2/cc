import { TestBed } from '@angular/core/testing';

import { HtmlElementService } from './html-element-service.service'

describe('HtmlElementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlElementService = TestBed.get(HtmlElementService);
    expect(service).toBeTruthy();
  });
});
