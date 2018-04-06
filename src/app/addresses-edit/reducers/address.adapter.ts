import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {Address} from '../../shared/models/address';

export const adapter: EntityAdapter<Address> = createEntityAdapter<Address>({
  selectId: (address: Address) => address.id,
  sortComparer: sortByName
});

export function sortByName(addr1: Address, addr2: Address): number {
  return addr1.name.localeCompare(addr2.name);
}

export const {
  selectIds: selectAddressIds,
  selectEntities: selectAddressEntities,
  selectAll: selectAllAddresses,
  selectTotal: addressesCount
} = adapter.getSelectors();
