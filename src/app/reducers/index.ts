import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromAddress from '../addresses-edit/reducers/address';

export interface State {
  address: fromAddress.State;
}

export const reducers: ActionReducerMap<State> = {
  address: fromAddress.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
