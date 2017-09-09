import { Component } from '@angular/core';

import {GlobalSchool}from './service/local.service';

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
    <!--<li class="active floatleft" [routerLink]="['/schools']" routerLinkActive="active">Schule</li>-->
    <li class="active floatleft" [routerLink]="['/classes']" routerLinkActive="active">Klasse</li>
    <li class="active floatleft" [routerLink]="['/teachers']" routerLinkActive="active">Lehrer</li>
    <li class="active floatleft" [routerLink]="['/students']" routerLinkActive="active">Schüler</li>
    <li style="">&nbsp;</li>

    <li class="active floatright" (click)="logoff()"><i class="fa fa-sign-out" aria-hidden="true"></i>
</li>
</ul>
</nav>
</div>

`,
styleUrls: ['./css/component.css']
})

export class NavbarComponent {
  private globalSchool : GlobalSchool;
  title = 'Studentnote';

  constructor(private globalSchoolImpl : GlobalSchool){
    this.globalSchool=globalSchoolImpl;
  }

  isGlobalSchool(){
    if(this.globalSchool.getSchool() != null){
    return true;
    }
    else{
    return false;
  }
  }

  logoff():void{
    location.href="/login";
  }
}
