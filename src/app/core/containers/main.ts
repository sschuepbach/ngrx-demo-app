import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  template: `
    <div fxLayout="row">
      <div fxFlex="200px" class="menu" *ngIf="visibleMenu$ | async">
        <app-menu-entries></app-menu-entries>
      </div>
      <div fxFlex class="content">
        <router-outlet></router-outlet>
      </div>
    </div>`,
  styles: [
    '.menu {background-color:#eee; padding:5px;}',
    '.content {padding:5px 15px;}'
  ]
})
export class MainComponent {

  visibleMenu$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.visibleMenu$ = store.pipe(select(fromRoot.getMenuVisibility));
  }

}
