import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

import {AddAddressComponent} from './containers/add-address';
import {FlexLayoutModule} from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import * as fromAddress from './reducers/address';
import { EffectsModule } from '@ngrx/effects';
import { AddressEffects } from './effects/address';

const routes: Routes = [
  {path: 'addAddress', component: AddAddressComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('address', fromAddress.reducer),
    EffectsModule.forFeature([AddressEffects]),
  ],
  declarations: [AddAddressComponent],
  exports: [AddAddressComponent]
})
export class AddressesEditModule {
}
