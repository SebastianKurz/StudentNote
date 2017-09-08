import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <div style="text-align:center;">
  <h1 style="padding-top:50px;">Das sind nicht die Droiden, die Ihr sucht.</h1>
  <span style="font-size:3000%;"><i class="fa fa-rebel" aria-hidden="true" style="cursor:pointer;" [routerLink]="['/login']" routerLinkActive="active"></i></span>
  </div>
  `,
  styleUrls: ['./css/component.css']
})

export class PageNotFoundComponent {
}
