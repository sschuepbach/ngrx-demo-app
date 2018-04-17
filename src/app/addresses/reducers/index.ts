import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromAddress from './address';
import * as fromAdapter from './address.adapter';
import * as fromRoot from '../../reducers';

export interface AddressState {
  addressEntities: fromAddress.State;
}

export interface State extends fromRoot.State {
  address: AddressState;
}

export const reducers: ActionReducerMap<AddressState> = {
  addressEntities: fromAddress.reducer
};

export const getState = createFeatureSelector<AddressState>('address');

export const getAddressEntities = createSelector(getState, (state) => state.addressEntities);

// export const selectAddressIds = createSelector(getAddressEntities, fromAdapter.selectAddressIds);
export const selectAddressEntities = createSelector(getAddressEntities, fromAdapter.selectAddressEntities);
export const selectAllAddresses = createSelector(getAddressEntities, fromAdapter.selectAllAddresses);
// export const addressesCount = createSelector(getAddressEntities, fromAdapter.addressesCount);

export const selectedCurrentAddressId = createSelector(getAddressEntities, fromAddress.getSelectedAddressId);
export const selectCurrentAddress = createSelector(
  selectAddressEntities,
  selectedCurrentAddressId,
  (addressEntities, addressId) => addressEntities[addressId]
);
