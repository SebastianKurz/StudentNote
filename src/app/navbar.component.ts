import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
  <div class="pane headerpicture" style="width: 64%;margin: 1.3em auto 1em auto;align:center;padding:2% 0 1% 0;">

<h1 class="title" style="margin:.6em;" (click)="viewHome()">{{title}}</h1>


<nav class="pane" style="padding: 0 0;margin: 0 0;">
<ul>
    <li class="active floatleft" (click)="viewHome()"><i class="fa fa-home" aria-hidden="true"></i>
</li>
    <li class="active floatleft" (click)="viewSchool()">School</li>
    <li class="active floatleft" (click)="viewClasses()">Classes</li>
    <li class="active floatleft" (click)="viewTeachers()">Teacher</li>
    <li class="active floatleft" (click)="viewStudents()">Students</li>
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
    alert("Logoff will be executed here. Currently no session implemented.");
  }
  viewHome():void{
    alert("going back to startpage.");
  }
  viewSchool():void{
    alert("visiting school view.");
  }
  viewClasses():void{
    alert("visiting classes view.");
  }
  viewTeachers():void{
    alert("visiting teachers view.");
  }
  viewStudents():void{
    alert("visiting students view.");
  }


}
