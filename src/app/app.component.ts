import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!---wenn noch nicht eingeloggt-->
  <login></login>
  <!--Wenn bereits eingeloggt zeige direkt den inhalt an-->
  <navbar></navbar>
  <content></content>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}
