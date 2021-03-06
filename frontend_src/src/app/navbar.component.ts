import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule, Http }    from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {GlobalSchool, GlobalClass}from './service/local.service';
import {GlobalLogin}from './service/local.service';

@Component({
  selector: 'navbar',
  template: `
  <div class="pane headerpicture" style="width: 64%;margin: 1.3em auto 1em auto;align:center;padding:2% 0 1% 0;">

  <div *ngIf="isGlobalSchool(); then  TitleWSchool  else Title"></div>

<ng-template #Title><h1 class="title" style="margin:.6em;" [routerLink]="['/home']" routerLinkActive="active">{{title}}</h1></ng-template>
<ng-template #TitleWSchool><h1 class="title" style="margin:.6em;" [routerLink]="['/home']" routerLinkActive="active">{{title}} for {{this.globalSchool.getSchool().name}}</h1></ng-template>


<nav class="pane" style="padding: 0 0;margin: 0 0;">
<ul>
    <li class="active floatleft" [routerLink]="['/home']" routerLinkActive="active"><i class="fa fa-home" aria-hidden="true"></i></li>
    <!--<li *ngIf="isGlobalSchool()" class="active floatleft" [routerLink]="['/classes']" routerLinkActive="active">Klassen</li>-->
    <li *ngIf="isGlobalSchool()" class="active floatleft" [routerLink]="['/schools']" routerLinkActive="active">Schule</li>
    <li *ngIf="isGlobalSchool()" class="active floatleft" [routerLink]="['/teachers']" routerLinkActive="active">Lehrer</li>
    <li *ngIf="isGlobalClass()" class="active floatleft" [routerLink]="['/students']" routerLinkActive="active">Schüler</li>
    <li style="">&nbsp;</li>

    <li class="active floatright" (click)="logoff()">{{getCurrentTeacherName()}}<i style="margin-left:1em;" class="fa fa-sign-out" aria-hidden="true"></i>
</li>
</ul>
</nav>
</div>

`,
styleUrls: ['./css/component.css']
})

export class NavbarComponent {
  private globalSchool : GlobalSchool;
  private globalClass : GlobalClass;
  private globalLogin : GlobalLogin;
  private router : Router;
  title = 'Studentnote';

  constructor(
    private globalSchoolImpl : GlobalSchool,
    private globalLoginImpl : GlobalLogin,
    private globalClassImpl:GlobalClass,
    private routerImpl:Router
  ){
    this.globalSchool=globalSchoolImpl;
    this.globalLogin=globalLoginImpl;
    this.globalClass=globalClassImpl;
    this.router=routerImpl;
    this.ngOnInit();
  }

  ngOnInit() {
    if (!(JSON.parse(localStorage.getItem('CurrentTeacher')).id)){
    this.logoff();
  }
    }
    ngOnDestroy():void {
  }

getCurrentTeacherName(){
  var x = JSON.parse(localStorage.getItem('CurrentTeacher'));
  if (x){
    return x.lastname;
  }else{
    return "";
  }
}

  isGlobalSchool(){
    if(this.globalSchool.getSchool() != null){
    return true;
    }
    else{
    return false;
  }
  }
  isGlobalClass(){
    if(this.globalClass.getClass() != null){
    return true;
    }
    else{
    return false;
  }
  }

  logoff():void{
    localStorage.removeItem('CurrentTeacher');
    localStorage.removeItem('CurrentSchool');
    localStorage.removeItem('CurrentClass');
    this.router.navigate(['/loginPage']);
  }
}
