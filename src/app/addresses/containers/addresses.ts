import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromFeature from '../reducers';
import {Address} from '../../shared/models/address';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addresses',
  template: `
    <app-addresses-filter></app-addresses-filter>
    <div *ngFor="let address of addresses$ | async; let e=even;">
      <app-address [address]="address" [even]="e"></app-address>
    </div>
    <button mat-button (click)="goToAddNewAddress()">+</button>`,
  styles: ['']
})
export class AddressesComponent {

  addresses$: Observable<Address[]>;

  constructor(private store: Store<fromFeature.State>, private router: Router) {
    this.addresses$ = store.pipe(select(fromFeature.selectAllAddresses));
  }

  goToAddNewAddress() {
    this.router.navigateByUrl('/addAddress');
  }

}
