import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Class } from './types/types';
import {Note} from './types/types';
import {Teacher} from './types/types';
import {Student} from './types/types';
import {School} from './types/types';

import {getTeacherService} from './service/get.service';


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
    {{teacher.lastname}}, {{teacher.firstname}}
  </li>
</ul>
      </div>
      <div class=" floatleft widthnexttobar">

      <div *ngIf="showNewTeacher" class="pane" style="width:100%;">
        <h3>Neuen Lehrer erfassen</h3>
          <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
            <input type="text" class="md-input" required [value]="NewTeacher.firstname">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="md-input-label">Vorname</label>
          </div>
          <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
              <input type="text" class="md-input" required [value]="NewTeacher.lastname">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label class="md-input-label">Nachname</label>
          </div>
          <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
                <input type="text" class="md-input" required [value]="NewTeacher.mailAddress">
                <span class="highlight"></span>
                <span class="bar"></span>
                <label class="md-input-label">EMail Adresse</label>
          </div>
         <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
                  <input type="password" class="md-input" required [value]="NewTeacher.password">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label class="md-input-label">Passwort</label>
                </div>
              <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
                  <input type="text" class="md-input" required [value]="NewTeacher.belongsToSchool">
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label class="md-input-label">Schule</label>
                </div>
        <div class="floatright">
        <button class="button small grey" type="button" (click)="cancelNewTeacher()">Abbrechen</button>
        <button class="button small blue" style="margin: 0 .3em;" type="button" (click)="newTeacher()">Anlegen</button>
        </div>
      </div>

      <div *ngIf="selectedTeacher" class="pane" style="width:100%;">
      <h3>Details: {{selectedTeacher.firstname}} {{selectedTeacher.lastname}}</h3>
        <div class="group" style="margin-top:3em;margin-bottom:1em;">
            <input class="md-input" type="text" required [(ngModel)]="selectedTeacher.firstname">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="md-input-label">Vorname</label>
          </div>
          <div class="group" style="margin-top:3em;margin-bottom:1em;">
              <input class="md-input" type="text" required [(ngModel)]="selectedTeacher.lastname">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label class="md-input-label">Nachname</label>
            </div>
          <div style="margin-left:5px"><label>id: </label>{{selectedTeacher.id}}</div>
        </div>

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

  constructor(private route: ActivatedRoute, private GetTeacherService: getTeacherService){
    this.title = 'Liste der Lehrer';
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
    this.teachers = this.GetTeacherService.getTeachers();
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
  this.cancelNewTeacher();
  this.selectedTeacher = teacher;
}

}
