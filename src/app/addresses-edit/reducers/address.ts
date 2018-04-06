import {EntityState} from '@ngrx/entity';

import * as fromAdapter from './address.adapter';
import * as fromActions from '../actions/address';
import {Address} from '../../shared/models/address';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface State extends EntityState<Address> {
}

export const initialState: State = fromAdapter.adapter.getInitialState({
  selectedAddressId: null
});

export function reducer(state = initialState, action: fromActions.AddressActions): State {
  switch (action.type) {

    case fromActions.AddressActionTypes.AddAddressAction: {
      return fromAdapter.adapter.addOne(action.payload.address, state);
    }

    case fromActions.AddressActionTypes.ModifyAddressAction: {
      return fromAdapter.adapter.updateOne({
        id: action.payload.id,
        changes: action.payload.changes
      }, state);
    }

    case fromActions.AddressActionTypes.RemoveAddressAction: {
      return fromAdapter.adapter.removeOne(action.payload.id, state);
    }

    // TODO: Add other (success / fail) actions

    default: {
      return state;
    }

  }
}

export const getArticleState = createFeatureSelector<State>('articleState');

export const selectArticleIds = createSelector(getArticleState, fromAdapter.selectAddressIds);
export const selectArticleEntities = createSelector(getArticleState, fromAdapter.selectAddressEntities);
export const selectAllArticles = createSelector(getArticleState, fromAdapter.selectAllAddresses);
export const articlesCount = createSelector(getArticleState, fromAdapter.addressesCount);
