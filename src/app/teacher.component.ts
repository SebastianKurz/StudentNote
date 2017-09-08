import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {Teacher} from './types/types';
import {Student} from './types/types';
import {School} from './types/types';

import {TEACHERS} from './dummy.data';

@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2>{{title}}</h2>
<button class="button medium red" type="button" (click) = "toggleNewTeacher()"><i class="fa fa-plus" aria-hidden="true"></i>
</button>
<ul class="listing">
  <li class="nobadge" *ngFor="let teacher of teachers"
    [class.selected]="teacher === selectedTeacher"
    (click)="selectTeacher(teacher)">
    {{teacher.firstname}} {{teacher.lastname}}
  </li>
</ul>
      </div>

      <div *ngIf="showNewTeacher" class="pane floatleft widthnexttobar">
        <h3>Neuen Lehrer erfassen</h3>
        <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
            <input type="text" required [value]="NewTeacher.firstname">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="input">Vorname</label>
          </div>
          <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
              <input type="text" required [value]="NewTeacher.lastname">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label class="input">Nachname</label>
            </div>
            <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
                <input type="text" required [value]="NewTeacher.mailAddress">
                <span class="highlight"></span>
                <span class="bar"></span>
                <label class="input">EMail Adresse</label>
              </div>
              <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
                  <input type="password" required [value]="NewTeacher.password">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label class="input">Passwort</label>
                </div>
              <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
                  <input type="text" required [value]="NewTeacher.belongsToSchool">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label class="input">Schule</label>
                </div>
            <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
                <input type="text" required [value]="NewTeacher.id">
                <span class="highlight"></span>
                <span class="bar"></span>
                <label class="input">ID</label>
              </div>
        <div class="">
        <button class="button small blue floatright" style="margin-left:.3em;" type="button" (click)="newTeacher()">Anlegen</button>
        <button class="button small grey floatright" type="button" (click)="cancelNewTeacher()">Abbrechen</button>
        </div>
      </div>

      <div *ngIf="selectedTeacher" class="pane floatleft widthnexttobar">
      <h3>Details: {{selectedTeacher.firstname}} {{selectedTeacher.lastname}}</h3>
      <div class="clearfix"></div>
        <div class="group" style="margin-top:3em;margin-bottom:1em;">
            <input type="text" required [(ngModel)]="selectedTeacher.firstname">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="input">Vorname</label>
          </div>
          <div class="group" style="margin-top:3em;margin-bottom:1em;">
              <input type="text" required [(ngModel)]="selectedTeacher.lastname">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label class="input">Nachname</label>
            </div>
          <div style="margin-left:5px"><label>id: </label>{{selectedTeacher.id}}</div>
        </div>

</div>
   `,
   styleUrls: ['./css/component.css']
})

export class TeacherComponent {
  title : string;
  teachers : Teacher[];
  selectedTeacher: Teacher;
  showNewTeacher : Boolean;
  NewTeacher : Teacher;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute){
    this.title = 'Liste der Lehrer';
    this.teachers = TEACHERS;
    this.showNewTeacher=false;
    this.NewTeacher= new Teacher(null,null,null,null,null,null);
  }

  toggleNewTeacher(){
        if(this.showNewTeacher==false){
                this.showNewTeacher=true;
        }
        else{
          this.cancelNewTeacher();
        }
  }
  cancelNewTeacher(){
      this.NewTeacher = new Teacher(null,null,null,null,null,null);
      this.showNewTeacher= false;
  }
  newTeacher(){
    //klasse anlegen und danach verstecken
      this.showNewTeacher= false;
  }
ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       //Ask Webservice
       this.selectedTeacher = this.teachers.find(o => o.id === this.id);
    });
  }
  ngOnDestroy() {
  this.sub.unsubscribe();
}

selectTeacher(teacher: Teacher): void {
  this.selectedTeacher = teacher;
}

}
