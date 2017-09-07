import { Component } from '@angular/core';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {CLASSES} from './dummy.data';
import {STUDENTS} from './dummy.data';

@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2>{{title}}</h2>
<ul class="listing">
  <li *ngFor="let klasse of classes"
    [class.selected]="klasse === selectedClass"
    (click)="onSelect(klasse)">
    <span class="badge">{{klasse.level}}</span> {{klasse.name}}
  </li>
</ul></div>

<div *ngIf="selectedClass" class="pane floatleft widthnexttobar">
<h3>Details: {{selectedClass.name}}</h3>
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

<div *ngIf="selectedClass" class="pane floatleft widthnexttobar">
<h3> Schüler dieser Klasse</h3>
<ul class="listing">
  <li class="nobadge" *ngFor="let student of students"
    [class.selected]="student === selectedStudent" [routerLink]="['/student',student.id]" routerLinkActive="active">{{student.firstname}} {{student.lastname}}

  </li>
</ul>
</div>



</div>
   `,
   styleUrls: ['./css/component.css']
})

export class ClassesComponent {
  title = 'Klassenübersicht';
  classes = CLASSES;
students : Student[];
  selectedClass: Class;

onSelect(klasse: Class): void {
  this.selectedClass = klasse;
  this.students = STUDENTS;
}
}
