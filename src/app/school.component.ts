import { Component } from '@angular/core';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {getSchoolService} from './service/get.service';

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

<div class="floatleft widthnexttobar">

<div *ngIf="showNewSchool" class="pane" style="width:100%;">
  <h3>Neue Schule erstellen</h3>
  <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
      <input type="text" class="md-input" required [value]="NewSchool.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="md-input-label">Name</label>
    </div>
    <div class="floatright">
    <button class="button small grey" type="button" (click)="cancelNewSchool()">Abbrechen</button>
    <button class="button small blue" style="margin: 0 .3em;" type="button" (click)="NewSchool()">Anlegen</button>
    </div>
</div>

<div *ngIf="selectedSchool" class="pane" style="width:100%;">
<h3>Details: {{selectedSchool.name}}</h3>
  <div class="group" style="margin-top:3em;margin-bottom:1em;">
      <input class="md-input" type="text" required [(ngModel)]="selectedSchool.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="md-input-label">Name</label>
    </div>
    <div style="margin-left:5px"><label>id: </label>{{selectedSchool.id}}</div>
  </div>

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
  private GetSchoolService: getSchoolService

  constructor(private GetSchoolServiceImpl: getSchoolService){
    this.title = 'Liste der Schulen';
    this.GetSchoolService=GetSchoolServiceImpl;
    this.showNewSchool = false;
    this.NewSchool = new School(null , null);
  }
  ngOnInit() {
    this.schools = this.GetSchoolService.getSchools();
    }

    ngOnDestroy():void {

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
  this.cancelNewSchool();
  this.selectedSchool = school;
}

}
