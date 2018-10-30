/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapcalculatorService } from './mapcalculator.service';

describe('Service: Mapcalculator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapcalculatorService]
    });
  });

  it('should ...', inject([MapcalculatorService], (service: MapcalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
