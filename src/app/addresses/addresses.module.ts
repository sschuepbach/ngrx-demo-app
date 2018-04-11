import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AddAddressComponent} from './containers/add-address';
import * as fromAddress from './reducers';
import {AddressEffects} from './effects/address';
import {AddressesComponent} from './containers/addresses';
import {AddressesFilterComponent} from './containers/addresses-filter';
import { AddressComponent } from './containers/address';

const routes: Routes = [
  {path: 'addAddress', component: AddAddressComponent},
  {path: 'addresses', component: AddressesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('address', fromAddress.reducers),
    EffectsModule.forFeature([AddressEffects]),
  ],
  declarations: [
    AddAddressComponent,
    AddressesComponent,
    AddressesFilterComponent,
    AddressComponent
  ],
  exports: [
    AddAddressComponent,
    AddressesComponent
  ]
})
export class AddressesModule {
}
