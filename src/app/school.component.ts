import { Component } from '@angular/core';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {GlobalStatus} from './service/local.service';
import {GlobalSchool} from './service/local.service';

import {postSchoolService}from './service/post.service';
import {getSchoolService}from './service/get.service';
import {updateSchoolService}from './service/update.service';
import {deleteSchoolService}from './service/delete.service';

@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2>{{title}}</h2>
<button class="button medium red" type="button" (click) = "toggleNewSchool()"><i class="fa fa-plus" aria-hidden="true"></i>
</button>
<ul class="L">
  <li  class="LNO" *ngFor="let school of schools"
    [class.selected]="school === selectedSchool"
    (click)="onSelect(school)">
    <div class="floatleft pane LPane">
    <div *ngIf="isGlobalSchool(school.id); then B else NB"></div>
    <ng-template #B>
    <div class="LBadge LB-Green floatleft" style="text-align:center" (click)="selectSchool(school)"><i class="fa fa-check-square-o" aria-hidden="true" style="font-weight:600;font-size:120%;"></i></div>
    <div class="LText floatleft">{{school.name}}</div>
    </ng-template>
    <ng-template #NB>
    <div class="LBadge LB-Blue floatleft" style="text-align:center" (click)="selectSchool(school)"><i class="fa fa-square-o" aria-hidden="true" style="font-weight:600;font-size:120%;"></i></div>
    <div class="LText floatleft">{{school.name}}</div>
    </ng-template>
    </div>
  </li>
</ul></div>

<div class="floatleft widthnexttobar">

<div *ngIf="showNewSchool" class="pane floatleft" style="width:100%;">
  <h3>Neue Schule erstellen</h3>
  <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
      <input type="text" class="md-input" required [value]="NewSchool.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="md-input-label">Name</label>
    </div>
    <div class="floatright">
    <button class="button small grey" type="button" (click)="cancelNewSchool()">Abbrechen</button>
    <button class="button small blue" style="margin: 0 .3em;" type="button" (click)="newSchool()">Anlegen</button>
    </div>
</div>

<div *ngIf="selectedSchool" class="pane floatleft" style="width:100%;">
<h3 style="width:90%;">Details: {{selectedSchool.name}}</h3>
<div class="del"><i class="fa fa-trash" aria-hidden="true" style="font-weight:600;font-size:150%;" (click)="deleteSchool(selectedSchool)"></i></div>
  <div class="group" style="margin-top:3em;margin-bottom:1em;">
      <input class="md-input" type="text" required [(ngModel)]="selectedSchool.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="md-input-label">Name</label>
    </div>
    <div style="margin-left:5px"><label>id: </label>{{selectedSchool.id}}</div>
    <div class="floatright">
    <button class="button small blue" style="margin: 0 .3em;" type="button" (click)="selectSchool(selectedSchool)">verwenden</button>
    </div>
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
  private globalSchool : GlobalSchool;
  private globalStatus : GlobalStatus;
  private PostSchoolService : postSchoolService;
  private GetSchoolService: getSchoolService;
  private UpdateSchoolService: updateSchoolService;
  private DeleteSchoolService: deleteSchoolService;

  constructor(
    private globalSchoolImpl : GlobalSchool,
    private globalStatusImpl : GlobalStatus,
    private PostSchoolServiceImpl : postSchoolService,
    private GetSchoolServiceImpl: getSchoolService,
    private UpdateSchoolServiceImpl: updateSchoolService,
    private DeleteSchoolServiceImpl: deleteSchoolService
  ){
    this.title = 'Liste der Schulen';
    this.globalSchool=globalSchoolImpl;
    this.globalStatus=globalStatusImpl;
    this.PostSchoolService=PostSchoolServiceImpl;
    this.GetSchoolService=GetSchoolServiceImpl;
    this.UpdateSchoolService=UpdateSchoolServiceImpl;
    this.DeleteSchoolService=DeleteSchoolServiceImpl;
    this.showNewSchool = false;
    this.NewSchool = new School(null , null);
  }
  init(){
    this.schools = this.GetSchoolService.getSchools();
  }
  ngOnInit() {
    this.init();
    }

    ngOnDestroy():void {

  }
  isGlobalSchool(id:number){
    if(this.globalSchool.getSchool() && this.globalSchool.getSchool().id == id){
    return true;
    }
    else{
    return false;
  }
  }
  selectSchool(school:School){
    if (this.isGlobalSchool(school.id)){
      this.globalSchool.unsetSchool();
    }else{
    this.globalSchool.setSchool(school);
  }
  }

  toggleNewSchool(){
        if(this.showNewSchool==false){
                this.selectedSchool=null;
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
  updateSchool(school :School){
    if (this.UpdateSchoolService.updateSchool(school)==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  deleteSchool(school : School){
    if (this.DeleteSchoolService.deleteSchool(school)==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }

onSelect(school: School): void {
  this.cancelNewSchool();
  this.selectedSchool = school;
}

}
