import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <div style="text-align:center;">
  <h1 style="padding-top:50px;">Keine Verbindung zum Datenhaltungssystem. Versuche es später nochmal.</h1>
  <span style="font-size:3000%;"><i class="fa fa-chain-broken" aria-hidden="true" style="cursor:pointer;" [routerLink]="['/loginPage']" routerLinkActive="active"></i></span>
  </div>
  `,
  styleUrls: ['./css/component.css']
})

export class NoConnectionComponent {
}
