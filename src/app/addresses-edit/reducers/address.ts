import {AddressActions, AddressActionTypes} from '../actions/address';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Address} from '../../shared/models/address';

const addressAdapter = createEntityAdapter<Address>({
  selectId: (address: Address) => address.id,
  sortComparer: sortByName
});

export function sortByName(addr1: Address, addr2: Address): number {
  return addr1.name.localeCompare(addr2.name);
}

export interface AddressState extends EntityState<Address> {
}

export const initialState: AddressState = addressAdapter.getInitialState();

export function reducer(state = initialState, action: AddressActions): AddressState {
  switch (action.type) {

    case AddressActionTypes.AddAddressAction:
      return addressAdapter.addOne(action.payload.address, state);

    case AddressActionTypes.ModifyAddressAction:
      return addressAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload.changes
      }, state);

    case AddressActionTypes.RemoveAddressAction:
      return addressAdapter.removeOne(action.payload.id, state);

    // TODO: Add other (success / fail) actions

    default:
      return state;
  }
}
