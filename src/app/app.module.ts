import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './core/components/app';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {CoreModule} from './core/core.module';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundPageComponent} from './core/components/not-found-page';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterEffects} from './effects/router';

const routes: Routes = [
  {path: '', redirectTo: '/addresses', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects, RouterEffects]),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
