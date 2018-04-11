import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Address} from '../../shared/models/address';
import * as AddressActions from '../actions/address';
import * as fromAddress from '../reducers/address';

@Component({
  selector: 'app-add-address',
  template: `
    <h3>Neuer Eintrag</h3>
    <form [formGroup]="addressForm">
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
        <button mat-button type="reset">Abbrechen</button>
      </div>
    </form>
  `,
  styles: [
    'h3 {margin-bottom:40px; color:darkred;}',
    '.label {font-weight:600;}',
    '.form-entry {margin:8px 0;}'
  ]
})
export class AddAddressComponent {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromAddress.State>) {
    this.createForm();
  }

  private createForm() {
    this.addressForm = this.fb.group({
      name: '',
      firstname: '',
      birthDate: [],
      wantsAds: true
    });
  }

  saveAddress() {
    const address: Address = this.addressForm.getRawValue();
    address.id = Math.random().toString().substr(2);
    this.store.dispatch(new AddressActions.AddAddress({address: address}));
  }

}
