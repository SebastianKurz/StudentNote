import { Component } from '@angular/core';

import {Class } from './types';
import {Note} from './types';
import {School} from './types';
import {Student} from './types';
import {Teacher} from './types';

@Component({
  selector: 'app-root',
  template: `
  <!---wenn noch nicht eingeloggt-->
  <!--<login></login>-->
  <!--Wenn bereits eingeloggt zeige direkt den inhalt an-->
  <navbar></navbar>
  <content></content>
  `,
  styleUrls: ['./component.css']
})

export class AppComponent {

}
