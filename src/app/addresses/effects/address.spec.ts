import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs/Observable';

import {AddressEffects} from './address';

describe('NewAddressService', () => {
  let actions$: Observable<any>;
  let effects: AddressEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddressEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AddressEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
