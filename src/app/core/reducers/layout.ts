import * as fromActions from '../actions/layout';


export interface State {
  color: string;
  menuVisibility: boolean;
}

export const initialState: State = {
  color: '#dddddd',
  menuVisibility: true
};

export function reducer(state = initialState, action: fromActions.LayoutActions): State {
  switch (action.type) {

    case fromActions.LayoutActionTypes.ChangeBannerColorAction: {
      // noinspection TypeScriptUnresolvedVariable
      return {...state, color: action.payload.color};
    }

    case fromActions.LayoutActionTypes.ToggleMenuVisibilityAction: {
      return {...state, menuVisibility: !state.menuVisibility};
    }

    default:
      return state;
  }
}

export const getHeaderBackgroundColor = (state: State) => state.color;

export const getMenuVisibilityState = (state: State) => state.menuVisibility;
