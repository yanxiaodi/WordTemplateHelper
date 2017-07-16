import { TestBed, inject } from '@angular/core/testing';

import { WordDocumentService } from './word-document.service';

describe('WordDocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordDocumentService]
    });
  });

  it('should be created', inject([WordDocumentService], (service: WordDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
