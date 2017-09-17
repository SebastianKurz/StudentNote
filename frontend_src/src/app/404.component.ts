import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <div style="text-align:center;">
  <h1 style="padding-top:50px;">404<br>Das ist nicht die Seite, die du suchst.</h1>
  <span style="font-size:3000%;"><i class="fa fa-rebel" aria-hidden="true" style="cursor:pointer;" [routerLink]="['/loginPage']" routerLinkActive="active"></i></span>
  </div>
  `,
  styleUrls: ['./css/component.css']
})

export class PageNotFoundComponent {
}
