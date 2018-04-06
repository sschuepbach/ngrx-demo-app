import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './components/app';
import {FooterComponent} from './components/footer';
import {HeaderComponent} from './components/header';
import {MainComponent} from './containers/main';

const COMPONENTS = [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  MainComponent
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
}
