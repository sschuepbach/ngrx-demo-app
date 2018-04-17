import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as fromRouterActions from '../actions/router';
import {tap} from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  @Effect({dispatch: false})
  navigateBack$ = this.actions$.pipe(
    ofType(fromRouterActions.BACK),
    tap(() => this.location.back())
  );

  @Effect({dispatch: false})
  navigateForward$ = this.actions$.pipe(
    ofType(fromRouterActions.FORWARD),
    tap(() => this.location.forward())
  );

  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }
}
