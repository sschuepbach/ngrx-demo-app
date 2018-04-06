import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div fxLayout="row" class="header">
      <h2>NgRx-Beispielprojekt: Adressbuch</h2>
    </div>
  `,
  styles: [
    '.header {padding:3px; background-color:#ddd}',
    'h2 {color:darkgray;}'
  ]
})
export class HeaderComponent {

  constructor() {
  }

}
