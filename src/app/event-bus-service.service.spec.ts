/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { EventBusServiceService } from './event-bus-service.service';

describe('Service: EventBusService', () => {
  beforeEach(() => {
    addProviders([EventBusServiceService]);
  });

  it('should ...',
    inject([EventBusServiceService],
      (service: EventBusServiceService) => {
        expect(service).toBeTruthy();
      }));
});
