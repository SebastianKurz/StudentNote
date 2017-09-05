import { Component } from '@angular/core';

import {Class } from './types';
import {Note} from './types';
import {School} from './types';
import {Student} from './types';
import {Teacher} from './types';

const CLASSES: Class[] = [
  { id: 7, name: 'Mathematik 1', level:'EF',belongsToSchool: 1 },
  { id: 8, name: 'Mathematik 2' , level:'EF',belongsToSchool: 1},
  { id: 9, name: 'Physik 1', level:'EF',belongsToSchool: 1 },
  { id: 10, name: 'Informatik  1', level:'EF',belongsToSchool: 1 },
  { id: 11, name: 'GK Mathematik 1', level:'Q1',belongsToSchool: 1 },
  { id: 12, name: 'GK Mathematik 2' , level:'Q1',belongsToSchool: 1},
  { id: 13, name: 'GK Physik 1', level:'Q1',belongsToSchool: 1 },
  { id: 14, name: 'LK Informatik 1', level:'Q1',belongsToSchool: 1 },
  { id: 15, name: 'GK Deutsch 1', level:'Q1',belongsToSchool: 1 },
  { id: 16, name: 'GK Englisch 1', level:'Q1',belongsToSchool: 1 },
  { id: 17, name: 'LK Englisch 1', level:'Q1',belongsToSchool: 1 },
  { id: 18, name: 'GK Erdkunde 1', level:'Q1',belongsToSchool: 1 },
  { id: 19, name: 'LK Mathematik 1', level:'Q2',belongsToSchool: 1 },
  { id: 20, name: 'GK Mathematik 1', level:'Q2',belongsToSchool: 1 },
  { id: 21, name: 'GK Mathematik 1', level:'Q1',belongsToSchool: 1 },
  { id: 22, name: 'GK Mathematik 2' , level:'Q1',belongsToSchool: 1},
  { id: 23, name: 'GK Physik 1', level:'Q1',belongsToSchool: 1 },
  { id: 24, name: 'LK Informatik 1', level:'Q1',belongsToSchool: 1 },
  { id: 25, name: 'GK Deutsch 1', level:'Q1',belongsToSchool: 1 },
  { id: 26, name: 'GK Englisch 1', level:'Q1',belongsToSchool: 1 }
];


@Component({
  selector: 'content',
  template: `
  <div id="divtest1" style="width: 64%;margin: 0 auto;align:center;">
  <div id="divtest2" class="pane" style>
<h2>{{title}}</h2>
<ul class="classes">
  <li *ngFor="let klasse of classes"
    [class.selected]="klasse === selectedClass"
    (click)="onSelect(klasse)">
    <span class="badge">{{klasse.level}}</span> {{klasse.name}}
  </li>
</ul></div>

<div *ngIf="selectedClass" class="card card-4 floatleft">
  <h3>{{selectedClass.name}} details!</h3>
  <div><label>id: </label>{{selectedClass.id}}</div>
  <div>
    <label>name: </label>
    <input class="md-input" [(ngModel)]="selectedClass.name" placeholder="name"/>
  </div>
</div>




</div>
   `,
   styleUrls: ['./component.css']
})

export class ContentHolderComponent {
  title = 'Klassenübersicht';
  classes = CLASSES;
  selectedClass: Class;

onSelect(klasse: Class): void {
  this.selectedClass = klasse;
}
}
