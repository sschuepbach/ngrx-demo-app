import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressesComponent} from './containers/addresses';
import {AddressesListComponent} from './components/addresses-list';
import {AddressesFilterComponent} from './containers/addresses-filter';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'addresses', component: AddressesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddressesComponent, AddressesListComponent, AddressesFilterComponent],
  exports: [AddressesComponent]
})
export class AddressesViewModule {
}
