/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DisplayGamesService } from './display-games.service';

describe('DisplayGamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayGamesService]
    });
  });

  it('should ...', inject([DisplayGamesService], (service: DisplayGamesService) => {
    expect(service).toBeTruthy();
  }));
});
