/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ContactsServiceService } from './contacts-service.service';

describe('Service: ContactsService', () => {
  beforeEach(() => {
    addProviders([ContactsServiceService]);
  });

  it('should ...',
    inject([ContactsServiceService],
      (service: ContactsServiceService) => {
        expect(service).toBeTruthy();
      }));
});
