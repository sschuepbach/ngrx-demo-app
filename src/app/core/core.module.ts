import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';
import {AddressesModule} from '../addresses/addresses.module';

import {AppComponent} from './components/app';
import {FooterComponent} from './components/footer';
import {HeaderComponent} from './containers/header';
import {MainComponent} from './containers/main';
import {MenuEntriesComponent} from './containers/menu-entries.component';
import {NotFoundPageComponent} from './components/not-found-page';

const COMPONENTS = [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  MainComponent,
  MenuEntriesComponent,
  NotFoundPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AddressesModule,
    RouterModule.forChild([]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
}
