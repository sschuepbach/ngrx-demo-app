import {Component} from '@angular/core';

@Component({
  selector: 'app-menu-entries',
  template: `
    <div class="container">
      <a routerLink="/addresses">
        <div class="entry">
          Adressen anzeigen
        </div>
      </a>
      <a routerLink="/addAddress">
        <div class="entry">
          Adresse hinzufügen
        </div>
      </a>
    </div>
  `,
  styles: [
    '.entry {font-size:85%; padding:6px 2px; width:80%; margin:0; border-bottom:1px lightgray solid; cursor: pointer;}',
    'a {color: black; text-decoration: none; -webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}',
    'a .entry:hover {color:darkred;}'
  ]
})
export class MenuEntriesComponent {

  constructor() {
  }

}
