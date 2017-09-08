import { Component } from '@angular/core';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {SCHOOLS} from './dummy.data';

@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2>{{title}}</h2>
<button class="button medium red" type="button" (click) = "toggleNewSchool()"><i class="fa fa-plus" aria-hidden="true"></i>
</button>
<ul class="listing">
  <li class="nobadge" *ngFor="let school of schools"
    [class.selected]="school === selectedSchool"
    (click)="onSelect(school)">
    {{school.name}}
  </li>
</ul></div>

<div *ngIf="showNewSchool" class="pane floatleft widthnexttobar">
  <h3>Neue Schule erstellen</h3>
  <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
      <input type="text" required [value]="NewSchool.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="input">Name</label>
    </div>
      <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
          <input type="text" required [value]="NewSchool.id">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label class="input">ID</label>
        </div>
  <div class="">
  <button class="button small blue floatright" style="margin-left:.3em;" type="button" (click)="newSchool()">Anlegen</button>
  <button class="button small grey floatright" type="button" (click)="cancelNewSchool()">Abbrechen</button>
  </div>
</div>

<div *ngIf="selectedSchool" class="pane floatleft widthnexttobar">
<h3>Details: {{selectedSchool.name}}</h3>
<div class="clearfix"></div>
  <div class="group" style="margin-top:3em;margin-bottom:1em;">
      <input type="text" required [(ngModel)]="selectedSchool.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="input">Name</label>
    </div>
    <div style="margin-left:5px"><label>id: </label>{{selectedSchool.id}}</div>
  </div>

</div>
   `,
   styleUrls: ['./css/component.css']
})

export class SchoolComponent {
  title : string;
  schools : School[];
  selectedSchool: School;
  showNewSchool : Boolean;
  NewSchool : School;

  constructor(){
    this.title = 'Liste der Schulen';
    this.schools = SCHOOLS;
    this.showNewSchool = false;
    this.NewSchool = new School(null , null);
  }

  toggleNewSchool(){
        if(this.showNewSchool==false){
                this.showNewSchool=true;
        }
        else{
          this.cancelNewSchool();
        }
  }
  cancelNewSchool(){
      this.NewSchool = new School( null , null );
      this.showNewSchool= false;
  }
  newSchool(){
    //klasse anlegen und danach verstecken
      this.showNewSchool= false;
  }

onSelect(school: School): void {
  this.selectedSchool = school;
}

}
