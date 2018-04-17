import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromLayout from '../core/reducers/layout';
import * as fromRouter from '@ngrx/router-store';
import {RouterStateUrl} from '../shared/utils';

export interface State {
  layout: fromLayout.State;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer
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
