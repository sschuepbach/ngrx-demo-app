import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromAddress from '../addresses-edit/reducers/address';
import * as fromLayout from '../core/reducers/layout';

export interface State {
  address: fromAddress.State;
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  address: fromAddress.reducer,
  layout: fromLayout.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}


export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getHeaderBackgroundColor = createSelector(
  getLayoutState,
  fromLayout.getHeaderBackgroundColor
);

export const getMenuVisibility = createSelector(
  getLayoutState,
  fromLayout.getMenuVisibilityState
);
