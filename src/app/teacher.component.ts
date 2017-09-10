import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Class } from './types/types';
import {Note} from './types/types';
import {Teacher} from './types/types';
import {Student} from './types/types';
import {School} from './types/types';

import {GlobalSchool}from './service/local.service';
import {GlobalStatus}from './service/local.service';
import {GlobalLogin}from './service/local.service';

import {postTeacherService} from './service/post.service';
import {getTeacherService} from './service/get.service';
import {updateTeacherService} from './service/update.service';
import {deleteTeacherService} from './service/delete.service';


@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2>{{title}}</h2>
<button class="button medium red" type="button" (click) = "toggleNewTeacher()"><i class="fa fa-plus" aria-hidden="true"></i>
</button>
<ul class="L">
  <li class="LNO" *ngFor="let teacher of teachers"
    [class.selected]="teacher === selectedTeacher"
    (click)="selectTeacher(teacher)">
    <div class="floatleft pane LPane">
    <div *ngIf="isLoginTeacher(teacher.id); then B else NB"></div>
    <ng-template #B>
    <div class="LBadge LB-Green floatleft" style="text-align:center" (click)="selectLoginTeacher(teacher)">&nbsp;</div>
    <div class="LText floatleft">{{teacher.lastname}}, {{teacher.firstname}}</div>
    </ng-template>
    <ng-template #NB>
    <div class="LBadge LB-Blue floatleft" style="text-align:center" (click)="selectLoginTeacher(teacher)">&nbsp;</div>
    <div class="LText floatleft">{{teacher.lastname}}, {{teacher.firstname}}</div>
    </ng-template>
    </div>
  </li>
</ul>
</div>

      <div class=" floatleft widthnexttobar">

      <div *ngIf="showNewTeacher" class="pane floatleft" style="width:100%;">
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
      <h3 style="width:90%;">Details: {{selectedTeacher.firstname}} {{selectedTeacher.lastname}}</h3>
      <div class="del"><i class="fa fa-trash" aria-hidden="true" style="font-weight:600;font-size:150%;" (click)="deleteTeacher(selectedTeacher)"></i></div>
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
  private globalSchool : GlobalSchool;
  private globalStatus : GlobalStatus;
  private globalLogin : GlobalLogin;
  private PostTeacherService: postTeacherService;
  private GetTeacherService: getTeacherService;
  private UpdateTeacherService: updateTeacherService;
  private DeleteTeacherService: deleteTeacherService;

  constructor(
    private route: ActivatedRoute,
    private PostTeacherServiceImpl: postTeacherService,
    private GetTeacherServiceImpl: getTeacherService,
    private UpdateTeacherServiceImpl: updateTeacherService,
    private DeleteTeacherServiceImpl: deleteTeacherService,
    private globalSchoolImpl : GlobalSchool,
    private globalStatusImpl : GlobalStatus,
    private globalLoginImpl : GlobalLogin
  ){
    this.title = 'Liste der Lehrer';
    this.globalSchool=globalSchoolImpl;
    this.globalStatus=globalStatusImpl;
    this.globalLogin=globalLoginImpl;
    this.PostTeacherService=PostTeacherServiceImpl;
    this.GetTeacherService=GetTeacherServiceImpl;
    this.UpdateTeacherService=UpdateTeacherServiceImpl;
    this.DeleteTeacherService=DeleteTeacherServiceImpl;
    this.showNewTeacher=false;
    this.NewTeacher= new Teacher(null,null,null,null,null,null);
  }

  toggleNewTeacher(){
        if(this.showNewTeacher==false){
            this.selectedTeacher = null;
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
  newTeacher(firstname:string,lastname:string,mailAddress:string,password:string, belongsToSchool:number){
    if (firstname > "" && lastname > "" && mailAddress > "" && password > "" && belongsToSchool > 0){
      this.PostTeacherService.postTeacher(new Teacher(null,firstname,lastname,mailAddress,password,belongsToSchool));
      this.showNewTeacher= false;
      //fetch new data
          this.init();
          }
    else{
      this.globalStatus.setStatus("Enter required Values");
    }
}
updateTeacher(teacher :Teacher){
  if (this.UpdateTeacherService.updateTeacher(teacher)==0){
      this.globalStatus.setStatus("Data submitted");
      this.init();
  }else{
      this.globalStatus.setStatus("ERROR during submitting data");
  }
}
deleteTeacher(teacher : Teacher){
  if (this.DeleteTeacherService.deleteTeacher(teacher)==0){
      this.globalStatus.setStatus("Data submitted");
      this.init();
  }else{
      this.globalStatus.setStatus("ERROR during submitting data");
  }
}
init(){
  if(this.globalSchool.getSchool()){
this.teachers = this.GetTeacherService.getEntities(this.globalSchool.getSchool().id);
}else{
  this.teachers = this.GetTeacherService.getTeachers();
}
}
ngOnInit() {
this.init();
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       //Ask Webservice
       this.selectedTeacher = this.teachers.find(o => o.id === this.id);
    });

  }
  ngOnDestroy() {
  this.sub.unsubscribe();
}
isLoginTeacher(id : number) {
  if (this.globalLogin.getLogin() && this.globalLogin.getLogin().id == id){
    return true;
  }
  else{
    return false;
  }
}
selectLoginTeacher(teacher){

}

selectTeacher(teacher: Teacher): void {
  this.cancelNewTeacher();
  this.selectedTeacher = teacher;
}

}
