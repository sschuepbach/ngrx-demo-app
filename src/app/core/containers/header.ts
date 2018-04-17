import {ChangeDetectionStrategy, Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromActions from '../actions/layout';
import * as fromRoot from '../../reducers';
import * as fromRouterActions from '../../actions/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div fxLayout="row" class="header" [style.background-color]="color$ | async">
      <div fxFlex>
        <h2>NgRx-Beispielprojekt: Adressbuch</h2>
      </div>
      <div fxFlex="50">
        <button mat-button (click)="generateColor()">Farbwechsel!</button>
        <button mat-button (click)="toggleShowMenu()">Menü!</button>
        <button mat-button (click)="goBack()">Zurück!</button>
        <button mat-button (click)="goForward()">Vorwärts!</button>
      </div>
    </div>
  `,
  styles: [
    '.header {padding:3px;}',
    'h2 {color:darkgray;}'
  ]
})
export class HeaderComponent {

  color$: Observable<string>;

  private static toHexChar(i: number) {
    switch (i) {
      case 10:
        return 'a';
      case 11:
        return 'b';
      case 12:
        return 'c';
      case 13:
        return 'd';
      case 14:
        return 'e';
      case 15:
        return 'f';
      default:
        return i.toString();
    }
  }

  constructor(private store: Store<fromRoot.State>) {
    this.color$ = store.pipe(select(fromRoot.getHeaderBackgroundColor));
  }

  generateColor() {
    const newColor = Array(6).fill(0).map(() => Math.round(Math.random() * 15)).reduce((x, y) => x + HeaderComponent.toHexChar(y), '#');
    this.store.dispatch(new fromActions.ChangeBannerColorAction({color: newColor}));
  }

  toggleShowMenu() {
    this.store.dispatch(new fromActions.ToggleMenuVisibilityAction());
  }

  goBack() {
    this.store.dispatch(new fromRouterActions.Back());
  }

  goForward() {
    this.store.dispatch(new fromRouterActions.Forward());
  }


}
