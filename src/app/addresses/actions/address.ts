import {Action} from '@ngrx/store';
import {Address} from '../../shared/models/address';

export enum AddressActionTypes {
  AddAddressAction = '[EditAddress] Add AddressComponent',
  AddAddressSuccessAction = '[EditAddress] Add AddressComponent Success',
  AddAddressFailAction = '[AddressComponent] Add AddressComponent Fail',
  ModifyAddressAction = '[AddressComponent] Modify AddressComponent',
  ModifyAddressSuccessAction = '[AddressComponent] Modify AddressComponent Success',
  ModifyAddressFailAction = '[AddressComponent] Modify AddressComponent Fail',
  RemoveAddressAction = '[AddressComponent] Remove AddressComponent',
  RemoveAddressSuccessAction = '[AddressComponent] Remove AddressComponent Success',
  RemoveAddressFailAction = '[AddressComponent] Remove AddressComponent Fail',
  SelectAddressAction = '[EditAddress] Select Address',
  ClearAddressesAction = '[EditAddress] Clear Addresses'
}

export class AddAddress implements Action {
  readonly type = AddressActionTypes.AddAddressAction;

  constructor(public payload: { address: Address }) {
  }
}

export class AddAddressSuccess implements Action {
  readonly type = AddressActionTypes.AddAddressSuccessAction;

  constructor(public payload: { id: string }) {
  }
}

export class AddAddressFail implements Action {
  readonly type = AddressActionTypes.AddAddressFailAction;

  constructor(public payload: { id: string }) {
  }
}

export class ModifyAddress implements Action {
  readonly type = AddressActionTypes.ModifyAddressAction;

  constructor(public payload: { id: string, changes: Partial<Address> }) {
  }
}

export class ModifyAddressSuccess implements Action {
  readonly type = AddressActionTypes.ModifyAddressSuccessAction;

  constructor(public payload: { id: string }) {
  }
}

export class ModifyAddressFail implements Action {
  readonly type = AddressActionTypes.ModifyAddressFailAction;

  constructor(public payload: { id: string }) {
  }
}

export class RemoveAddress implements Action {
  readonly type = AddressActionTypes.RemoveAddressAction;

  constructor(public payload: { id: string }) {
  }
}

export class RemoveAddressSuccess implements Action {
  readonly type = AddressActionTypes.RemoveAddressSuccessAction;

  constructor(public payload: { id: string }) {
  }
}

export class RemoveAddressFail implements Action {
  readonly type = AddressActionTypes.RemoveAddressFailAction;

  constructor(public payload: { id: string }) {
  }
}

export class SelectAddress implements Action {
  readonly type = AddressActionTypes.SelectAddressAction;

  constructor(public payload: { id: string }) {
  }
}

export class ClearAddresses implements Action {
  readonly type = AddressActionTypes.ClearAddressesAction;
}

export type AddressActions
  = AddAddress
  | AddAddressSuccess
  | AddAddressFail
  | ModifyAddress
  | ModifyAddressSuccess
  | ModifyAddressFail
  | RemoveAddress
  | RemoveAddressSuccess
  | RemoveAddressFail
  | SelectAddress
  | ClearAddresses;
