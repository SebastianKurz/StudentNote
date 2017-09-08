import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  <div class="pane headerpicture" style="width: 64%;margin: 1.3em auto 1em auto;align:center;padding:2% 0 1% 0;">

<h1 class="title" style="margin:.6em;" [routerLink]="['/home']" routerLinkActive="active">{{title}}</h1>


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
  title = 'Studentnote';

  logoff():void{
    location.href="/login";
  }
  viewHome():void{
    location.href="/home";
  }
  viewSchool():void{
    location.href="/schools";
  }
  viewClasses():void{
    location.href="/classes";
  }
  viewTeachers():void{
    location.href="/teachers";
  }
  viewStudents():void{
    location.href="/students";
  }


}
