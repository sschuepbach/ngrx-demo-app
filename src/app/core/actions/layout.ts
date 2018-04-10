import {Action} from '@ngrx/store';

export enum LayoutActionTypes {
  ChangeBannerColorAction = '[Layout] Change Banner Color',
  ToggleMenuVisibilityAction = '[Layout] Toggle menu visibility'
}

export class ChangeBannerColorAction implements Action {
  readonly type = LayoutActionTypes.ChangeBannerColorAction;

  constructor(public payload: { color: string }) {
  }
}

export class ToggleMenuVisibilityAction implements Action {
  readonly type = LayoutActionTypes.ToggleMenuVisibilityAction;
}

export type LayoutActions
  = ChangeBannerColorAction
  | ToggleMenuVisibilityAction;
