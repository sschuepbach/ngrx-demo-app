import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromAddress from './address';
import * as fromAdapter from './address.adapter';
import * as fromRoot from '../../reducers';

export interface AddressState {
  address: fromAddress.State;
}

export interface State extends fromRoot.State {
  address: AddressState;
}

export const reducers: ActionReducerMap<AddressState> = {
  address: fromAddress.reducer
};

export const getState = createFeatureSelector<State>('address');

// TODO: Fix dot notation
export const getAddressState = createSelector(getState, (state) => state.address.address);

export const selectAddressIds = createSelector(getAddressState, fromAdapter.selectAddressIds);
export const selectAddressEntities = createSelector(getAddressState, fromAdapter.selectAddressEntities);
export const selectAllAddresses = createSelector(getAddressState, fromAdapter.selectAllAddresses);
export const addressesCount = createSelector(getAddressState, fromAdapter.addressesCount);
