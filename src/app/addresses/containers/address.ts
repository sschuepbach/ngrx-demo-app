import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Address} from '../../shared/models/address';
import * as fromActions from '../actions/address';
import * as fromFeature from '../reducers';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-address',
  template: `
    <div [ngStyle]="{'background-color': getBackgroundColor()}">
      <ul>
        <li>{{address.firstname}} {{address.name}} ({{address.birthDate}})</li>
        <li>Ads: {{address.wantsAds ? 'yes' : 'no'}}</li>
      </ul>
      <button mat-button (click)="editAddress()">Ändern</button>
      <button mat-button (click)="deleteAddress()">Löschen</button>
    </div>
  `,
  styles: ['div {border-bottom: 1px solid #ccc; margin:0; padding:3px;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent {

  @Input() address: Address;
  @Input() even: boolean;

  constructor(private store: Store<fromFeature.State>, private router: Router) {

  }

  deleteAddress() {
    this.store.dispatch(new fromActions.RemoveAddress({id: this.address.id}));
  }

  editAddress() {
    this.store.dispatch(new fromActions.SelectAddress({id: this.address.id}));
    this.router.navigateByUrl('/modify');
  }

  getBackgroundColor() {
    return this.even ? '#eee' : '#fff';
  }

}
