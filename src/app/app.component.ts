import { Component } from '@angular/core';

import {Class } from './types';
import {Note} from './types';
import {School} from './types';
import {Student} from './types';
import {Teacher} from './types';

@Component({
  selector: 'app-root',
  styles : [` .parent { background : #c7c7c7; color : #000; padding: 20px; }`],
  template: `
  <!---wenn noch nicht eingeloggt-->
  <!--<login></login>-->
  <!--Wenn bereits eingeloggt zeige direkt den inhalt an-->
  <navbar></navbar>
  <content></content>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}

const CLASSES: Class[] = [
  { id: 11, name: '1a', level:'1',belongsToSchool: 1 },
  { id: 12, name: '1b' , level:'1',belongsToSchool: 1},
  { id: 13, name: '1c', level:'1',belongsToSchool: 1 },
  { id: 14, name: '1d', level:'1',belongsToSchool: 1 },
  { id: 15, name: '2a', level:'1',belongsToSchool: 2 },
  { id: 16, name: '2b', level:'1',belongsToSchool: 2 },
  { id: 17, name: '3a', level:'1',belongsToSchool: 3 },
  { id: 18, name: '3b', level:'1',belongsToSchool: 3 },
  { id: 19, name: '3c', level:'1',belongsToSchool: 3 },
  { id: 20, name: '4a', level:'1',belongsToSchool: 4 }
];
