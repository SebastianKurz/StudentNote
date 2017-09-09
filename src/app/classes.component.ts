import { Component, OnInit, OnDestroy } from '@angular/core';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {GlobalSchool}from './service/local.service';
import { GlobalStatus } from './service/local.service';

import {postClassService} from './service/post.service';
import {getClassService} from './service/get.service';
import {updateClassService} from './service/update.service';
import {deleteClassService} from './service/delete.service';
import {getStudentService} from './service/get.service';

@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2>{{title}}</h2>
<button class="button medium red" type="button" (click) = "toggleNewClass()"><i class="fa fa-plus" aria-hidden="true"></i>
</button>
<ul class="L " >
  <li class="LNO" *ngFor="let klasse of classes"
    [class.selected]="klasse === selectedClass"
    (click)="selectClass(klasse)">
    <div class="floatleft pane LPane">
    <div class="LBadge LB-Blue floatleft" >{{klasse.level}}</div>
    <div class="LText floatleft">{{klasse.name}}</div>
    </div>
  </li>
</ul></div>

<div *ngIf="showNewClass" class="pane floatleft widthnexttobar">
  <h3>Neue Klasse erstellen</h3>
  <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
      <input #name type="text" class="md-input" required [value]="NewClass.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="md-input-label">Name</label>
    </div>
    <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
        <input #level type="text" class="md-input" required [value]="NewClass.level">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="md-input-label">Stufe</label>
      </div>
        <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
            <input #belongsToSchool type="text" class="md-input" required [value]="NewClass.belongsToSchool">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="md-input-label">Schule</label>
          </div>
          <div class="floatright">
          <button class="button small grey" type="button" (click)="cancelNewClass()">Abbrechen</button>
          <button class="button small blue" style="margin: 0 .3em;" type="button" (click)="newClass(name.value, level.value, belongsToSchool.value)">Anlegen</button>
          {{NewClass.name}} {{NewClass.level}} {{belongsToClass}}
          </div>
</div>


<div *ngIf="selectedClass" class="pane floatleft widthnexttobar">
<h3 style="width:90%;">Details: {{selectedClass.name}}</h3>
<div class="del"><i class="fa fa-trash" aria-hidden="true" style="font-weight:600;font-size:150%;" (click)="deleteClass(selectedClass)"></i></div>
<div class="clearfix"></div>
  <div class="group" style="margin-top:3em;margin-bottom:1em;">
      <input class="md-input" type="text" required [(ngModel)]="selectedClass.name">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="md-input-label">Name</label>
    </div>
    <div class="group" style="margin-top:3em;margin-bottom:1em;">
        <input class="md-input" type="text" required [(ngModel)]="selectedClass.level">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="md-input-label">Stufe</label>
      </div>
    <div style="margin-left:5px"><label>id: </label>{{selectedClass.id}}</div>
  </div>

<!--
  <div *ngIf="selectedClass" class="pane floatleft widthnexttobar">
  <h3> Lehrer</h3>
  <ul class="listing">
    <li class="nobadge" *ngFor="let teacher of teachers"
      [class.selected]="teacher === selectedTeacher" [routerLink]="['/teacher',teacher.id]" routerLinkActive="active">{{teacher.firstname}} {{teacher.lastname}}
  </li></ul></div>
  -->

<div *ngIf="selectedClass" class="floatleft widthnexttobar">

<div *ngIf="isStudents(); then schueler else keineschueler"></div>

<ng-template #keineschueler>
<div class="pane floatleft" style="width:100%;margin-bottom:.3em;">
<span style="width:40%;font-weight:600;font-size:130%;">Keine Schüler in dieser Klasse</span>
</div>
</ng-template>

<ng-template #schueler>
<div class="pane floatleft" style="padding-top: 1em;padding-bottom:3em;margin-bottom:.3em;width:100%">
<h3>Schüler dieser Klasse</h3>
<ul class="L">
  <li class="LNO" *ngFor="let student of students"
    [class.selected]="student === selectedStudent" [routerLink]="['/student',student.id]" routerLinkActive="active">
    <div class="floatleft pane LPane">
    <div class="LText floatleft">{{student.firstname}} {{student.lastname}}</div>
    </div>
</li></ul></div>
</ng-template>

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
  private PostClassService: postClassService;
  private GetClassService: getClassService;
  private UpdateClassService: updateClassService;
  private DeleteClassService: deleteClassService;
  private GetStudentService: getStudentService;
  private globalSchool : GlobalSchool;
  private globalStatus: GlobalStatus;

constructor(
  private PostClassServiceImpl: postClassService,
  private GetClassServiceImpl: getClassService,
  private UpdateClassServiceImpl: updateClassService,
  private DeleteClassServiceImpl: deleteClassService,
  private GetStudentServiceImpl: getStudentService,
  private globalSchoolImpl : GlobalSchool,
  private globalStatusImpl: GlobalStatus
){
  this.title = 'Klassenübersicht';
  this.PostClassService=PostClassServiceImpl;
  this.GetClassService=GetClassServiceImpl;
  this.UpdateClassService=UpdateClassServiceImpl;
  this.DeleteClassService=DeleteClassServiceImpl;
  this.GetStudentService=GetStudentServiceImpl;
  this.globalSchool=globalSchoolImpl;
  this.globalStatus=globalStatusImpl;
  this.showNewClass = false;
  this.NewClass =  new Class( null ,null , null , null );

}
init(){
  if(this.globalSchool.getSchool()){
this.classes = this.GetClassService.getEntities(this.globalSchool.getSchool().id);
}else{
  this.classes = this.GetClassService.getClasses();
}
}
ngOnInit() {
  this.init();
  }

  ngOnDestroy():void {

}
isStudents(){
 if (this.students.length > 0){
    return true;
  }else{
    return false;
  }
}

toggleNewClass(){
      if(this.showNewClass==false){
              this.selectedClass=null;
              this.students=null;
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
newClass(name:string,level:string,belongsToSchool:number){
    if (name > "" && level > "" && belongsToSchool > 0){
      this.PostClassService.postClass(this.NewClass);
      this.showNewClass= false;
      this.globalStatus.setStatus(name +" "+ level +" "+ belongsToSchool);
      //refesh Data
      this.init();
    }
    else{
    this.globalStatus.setStatus("enter some Values");
    }
  }
    updateClass(klasse : Class){
      if (this.UpdateClassService.updateClass(klasse)==0){
          this.globalStatus.setStatus("Data submitted");
          this.init();
      }else{
          this.globalStatus.setStatus("ERROR during submitting data");
      }
    }
    deleteClass(klasse : Class){
      if (this.DeleteClassService.deleteClass(klasse)==0){
          this.globalStatus.setStatus("Data submitted");
          this.init();
      }else{
          this.globalStatus.setStatus("ERROR during submitting data");
      }
    }
selectClass(klasse: Class): void {
  this.cancelNewClass();
  this.selectedClass = klasse;
  this.students = this.GetStudentService.getEntities(klasse.id);
}
}
