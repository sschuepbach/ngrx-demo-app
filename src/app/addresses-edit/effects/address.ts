import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AddressActions, AddressActionTypes } from '../actions/address';

@Injectable()
export class AddressEffects {

  @Effect()
  effect$ = this.actions$.ofType(AddressActionTypes.AddAddressAction);

  constructor(private actions$: Actions) {}
}
