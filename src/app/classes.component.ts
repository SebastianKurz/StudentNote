import { Component } from '@angular/core';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {CLASSES} from './dummy.data';
import {STUDENTS} from './dummy.data';
import {TEACHERS} from './dummy.data';

@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2>{{title}}</h2>
<button class="button medium red" type="button" (click) = "toggleNewClass()"><i class="fa fa-plus" aria-hidden="true"></i>
</button>
<ul class="listing">
  <li *ngFor="let klasse of classes"
    [class.selected]="klasse === selectedClass"
    (click)="selectClass(klasse)">
    <span class="badge">{{klasse.level}}</span> {{klasse.name}}
  </li>
</ul></div>

<div *ngIf="showNewClass" class="pane floatleft widthnexttobar">
  <h3>Neue Klasse erstellen</h3>
  <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
      <input type="text" required [value]="NewClass.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="input">Name</label>
    </div>
    <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
        <input type="text" required [value]="NewClass.level">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="input">Stufe</label>
      </div>
      <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
          <input type="text" required [value]="NewClass.id">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label class="input">ID</label>
        </div>
        <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
            <input type="text" required [value]="NewClass.belongsToSchool">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="input">Schule</label>
          </div>
  <div class="">
  <button class="button small blue floatright" style="margin-left:.3em;" type="button" (click)="newClass()">Anlegen</button>
  <button class="button small grey floatright" type="button" (click)="cancelNewClass()">Abbrechen</button>
  </div>
</div>


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
  <h3> Lehrer</h3>
  <ul class="listing">
    <li class="nobadge" *ngFor="let teacher of teachers"
      [class.selected]="teacher === selectedTeacher" [routerLink]="['/teacher',teacher.id]" routerLinkActive="active">{{teacher.firstname}} {{teacher.lastname}}
  </li></ul></div>

<div *ngIf="selectedClass" class="pane floatleft widthnexttobar">
<h3> Schüler dieser Klasse</h3>
<ul class="listing">
  <li class="nobadge" *ngFor="let student of students"
    [class.selected]="student === selectedStudent" [routerLink]="['/student',student.id]" routerLinkActive="active">{{student.firstname}} {{student.lastname}}
</li></ul></div>

</div>
   `,
   styleUrls: ['./css/component.css']
})

export class ClassesComponent {
  title : String;
  classes : Class[];
  students : Student[];
  teachers : Teacher[];
  selectedClass: Class;
  showNewClass : Boolean;
  NewClass : Class;

constructor(){
  this.title = 'Klassenübersicht';
  this.classes = CLASSES;
  this.teachers=TEACHERS;
  this.showNewClass = false;
  this.NewClass =  new Class( null ,null , null , null );
}

toggleNewClass(){
      if(this.showNewClass==false){
              this.showNewClass=true;
      }
      else{
        this.cancelNewClass();
      }
}
cancelNewClass(){
    this.NewClass = new Class( null ,null , null , null );
    this.showNewClass= false;
}
newClass(){
  //klasse anlegen und danach verstecken
    this.showNewClass= false;
}
selectClass(klasse: Class): void {
  this.cancelNewClass();
  this.selectedClass = klasse;
  this.students = STUDENTS;
}
}
