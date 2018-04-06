import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-between stretch" class="container">
      <div>
        <app-header></app-header>
      </div>
      <div fxFlex="1">
        <app-main></app-main>
      </div>
      <div>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styles: [
    '.container {min-height:100%;}'
  ]
})
export class AppComponent {
}
