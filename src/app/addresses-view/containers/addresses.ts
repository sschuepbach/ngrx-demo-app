import {Component} from '@angular/core';

@Component({
  selector: 'app-addresses',
  template: `
    <app-addresses-filter></app-addresses-filter>
    <app-addresses-list></app-addresses-list>`,
  styles: ['']
})
export class AddressesComponent {

  constructor() {
  }

}
