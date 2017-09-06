import { Component } from '@angular/core';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

@Component({
  selector: 'app-root',
  template: `
  <!---wenn noch nicht eingeloggt-->
  <!--<login></login>-->
  <!--Wenn bereits eingeloggt zeige direkt den inhalt an-->
  <navbar></navbar>
  <content></content>
  `,
  styleUrls: ['./css/component.css']
})

export class AppComponent {

}
