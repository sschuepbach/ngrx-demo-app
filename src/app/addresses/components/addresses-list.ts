import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Address} from '../../shared/models/address';

@Component({
  selector: 'app-addresses-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngFor="let address of addresses">
      <ul>
        <li>{{address.firstname}} {{address.name}} ({{address.birthDate}})</li>
        <li>Ads: {{address.wantsAds ? 'yes' : 'no'}}</li>
      </ul>
    </div>`,
  styles: ['']
})
export class AddressesListComponent {

  @Input() addresses: Address[] = [];

  constructor() {
  }

}
