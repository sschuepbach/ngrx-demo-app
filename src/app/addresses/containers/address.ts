import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

import {Address} from '../../shared/models/address';
import * as fromActions from '../actions/address';
import * as fromFeature from '../reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-address',
  template: `
    <ul>
      <li>{{address.firstname}} {{address.name}} ({{address.birthDate}})</li>
      <li>Ads: {{address.wantsAds ? 'yes' : 'no'}}</li>
    </ul>
    <button mat-button>Ändern</button>
    <button mat-button (click)="deleteAddress()">Löschen</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent implements OnInit {

  @Input() address: Address;

  constructor(private store: Store<fromFeature.State>) {

  }

  ngOnInit() {
  }

  deleteAddress() {
    this.store.dispatch(new fromActions.RemoveAddress({id: this.address.id}));
  }

  editAddress() {
  }

}
