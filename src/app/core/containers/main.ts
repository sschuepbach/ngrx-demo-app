import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div fxLayout="row">
      <div fxFlex="200px" class="menu">
        <app-menu-entries></app-menu-entries>
      </div>
      <div fxFlex class="content">
        <router-outlet></router-outlet>
      </div>
    </div>`,
  styles: [
    '.menu {background-color:#eee; padding:5px;}',
    '.content {padding:5px 15px;}'
  ]
})
export class MainComponent {

  constructor() {
  }

}
