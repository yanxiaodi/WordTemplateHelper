import { TestBed, inject } from '@angular/core/testing';

import { SettingsStorageService } from './settings-storage.service';

describe('SettingsStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsStorageService]
    });
  });

  it('should be created', inject([SettingsStorageService], (service: SettingsStorageService) => {
    expect(service).toBeTruthy();
  }));
});
