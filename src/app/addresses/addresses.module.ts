import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';

import {AddAddressComponent} from './containers/add-address';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';
import * as fromAddress from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {AddressEffects} from './effects/address';
import {AddressesComponent} from './containers/addresses';
import {AddressesListComponent} from './components/addresses-list';
import {AddressesFilterComponent} from './containers/addresses-filter';

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
    AddressesListComponent,
    AddressesFilterComponent
  ],
  exports: [
    AddAddressComponent,
    AddressesComponent
  ]
})
export class AddressesModule {
}
