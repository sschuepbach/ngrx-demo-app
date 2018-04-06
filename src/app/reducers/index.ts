import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromNewAddress from '../addresses-edit/reducers/address';

export interface State {

  newAddress: fromNewAddress.AddressState;
}

export const reducers: ActionReducerMap<State> = {

  newAddress: fromNewAddress.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
