import { TestBed, inject } from '@angular/core/testing';

import { WordTemplateApiService } from './word-template-api.service';

describe('WordTemplateApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordTemplateApiService]
    });
  });

  it('should be created', inject([WordTemplateApiService], (service: WordTemplateApiService) => {
    expect(service).toBeTruthy();
  }));
});
