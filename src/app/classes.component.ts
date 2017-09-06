import { Component } from '@angular/core';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

const CLASSES: Class[] = [
  { id: 7, name: 'Mathematik 1', level:'EF',belongsToSchool: 2 },
  { id: 8, name: 'Mathematik 2' , level:'EF',belongsToSchool: 2},
  { id: 9, name: 'Physik 1', level:'EF',belongsToSchool: 2},
  { id: 10, name: 'Informatik  1', level:'EF',belongsToSchool: 2 },
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
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane" style="display:block;float:left;">
<h2>{{title}}</h2>
<ul class="classes">
  <li *ngFor="let klasse of classes"
    [class.selected]="klasse === selectedClass"
    (click)="onSelect(klasse)">
    <span class="badge">{{klasse.level}}</span> {{klasse.name}}
  </li>
</ul></div>

<div *ngIf="selectedClass" class="pane floatleft">
<div class="clearfix"></div>
  <div class="group" style="margin-top:3em;margin-bottom:1em;">
      <input type="text" required [(ngModel)]="selectedClass.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="input">Name</label>
    </div>
    <div class="group" style="margin-top:3em;margin-bottom:1em;">
        <input type="text" required [(ngModel)]="selectedClass.level">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="input">Stufe</label>
      </div>
    <div style="margin-left:5px"><label>id: </label>{{selectedClass.id}}</div>
  </div>




</div>
   `,
   styleUrls: ['./css/component.css']
})

export class ClassesComponent {
  title = 'Klassenübersicht';
  classes = CLASSES;
  selectedClass: Class;

onSelect(klasse: Class): void {
  this.selectedClass = klasse;
}
}
