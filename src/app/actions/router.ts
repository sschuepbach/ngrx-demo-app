import {Action} from '@ngrx/store';

export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';

export class Back implements Action {
  readonly type = BACK;
}

export class Forward implements Action {
  readonly type = FORWARD;
}

export type RouterActionsUnion
  = Back
  | Forward;
