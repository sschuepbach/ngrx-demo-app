import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromFeature from '../reducers';
import {Address} from '../../shared/models/address';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-addresses',
  template: `
    <app-addresses-filter></app-addresses-filter>
    <app-addresses-list [addresses]="addresses$ | async"></app-addresses-list>`,
  styles: ['']
})
export class AddressesComponent {

  addresses$: Observable<Address[]>;

  constructor(private store: Store<fromFeature.State>) {
    this.addresses$ = store.pipe(select(fromFeature.selectAllAddresses));
  }

}
