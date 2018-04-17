import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromActions from '../actions/address';
import {Observable} from 'rxjs/Observable';
import {Address} from '../../shared/models/address';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modify-address',
  template: `
    <div *ngIf="addressById$ | async; else fallback">
      <h3>Eintrag {{(addressById$ | async).id }} modifizieren</h3>
      <form [formGroup]="addressForm" appConnectForm [connectForm]="addressById$ | async">
        <div fxLayout="row" class="form-entry">
          <div fxFlex="200px" class="label">
            Name
          </div>
          <div fxFlex>
            <input matInput type="text" formControlName="name">
          </div>
        </div>
        <div fxLayout="row" class="form-entry">
          <div fxFlex="200px" class="label">
            Vorname
          </div>
          <div fxFlex>
            <input matInput type="text" formControlName="firstname">
          </div>
        </div>
        <div fxLayout="row" class="form-entry">
          <div fxFlex="200px" class="label">
            Geburtsdatum
          </div>
          <div fxFlex>
            <input matInput type="date" formControlName="birthDate">
          </div>
        </div>
        <div fxLayout="row" class="form-entry">
          <div fxFlex="200px" class="label">
            Werbung erwünscht
          </div>
          <div fxFlex>
            <mat-checkbox formControlName="wantsAds"></mat-checkbox>
          </div>
        </div>
        <div class="form-entry">
          <button mat-button type="submit" (click)="saveAddress()">Speichern</button>
          <button mat-button type="reset" (click)="abort()">Abbrechen</button>
        </div>
      </form>
    </div>
    <ng-template #fallback>
      <p><b>No address selected!</b></p>
    </ng-template>
  `,
  styles: [
    'h3 {margin-bottom:40px; color:darkred;}',
    '.label {font-weight:600;}',
    '.form-entry {margin:8px 0;}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModifyAddressComponent implements OnDestroy {

  addressById$: Observable<Address>;
  addressForm: FormGroup;
  addressId: string;

  constructor(private store: Store<fromFeature.State>, private fb: FormBuilder, private router: Router) {
    this.addressById$ = store.pipe(select(fromFeature.selectCurrentAddress));
    store.select(fromFeature.selectCurrentAddress).subscribe(addr => this.addressId = addr ? addr.id : '');
    this.addressForm = this.fb.group({
      name: '',
      firstname: '',
      birthDate: [],
      wantsAds: true
    });
  }

  ngOnDestroy() {
    this.store.dispatch(new fromActions.ClearAddresses());
  }

  saveAddress() {
    this.store.dispatch(new fromActions.ModifyAddress({id: this.addressId, changes: (this.addressForm.getRawValue() as Address)}));
    this.router.navigateByUrl('/addresses');
  }

  abort() {
    this.router.navigateByUrl('/addresses');
  }

}
