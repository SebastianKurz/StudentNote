import { Component } from '@angular/core';

import {Teacher} from './types/types';

import {GlobalSchool}from './service/local.service';
import {GlobalLogin}from './service/local.service';
import {getTeacherService} from './service/get.service';
import {getSchoolService} from './service/get.service';

@Component({
  selector: 'app',
  template: `
<div class="pane" style="width:40%;margin: 1em auto 1em auto; padding: 3em 0 3em 0;">
  <!--Title Part -->
<div  style="text-align:center">
  <h1 style="padding-top:50px;">
    {{title}}
  </h1>

  <!-- Replace this later -->
  <img  width="450px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=">
</div>

<!--Login Button -->
<div style="text-align:center">
<div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
    <input #a type="text" class="md-input" required>
    <span class="highlight"></span>
    <span class="bar"></span>
    <label class="md-input-label">EMail"</label>
  </div>
<button type="button" style="margin-top:8em;" (click)="login(a.value)">Login</button>
</div>

</div>
`,
styleUrls: ['./css/component.css']
})

export class LoginComponent {
  title = 'Studentnote';
  private globalLogin:GlobalLogin;
  private globalSchool: GlobalSchool;
  private GetTeacherService: getTeacherService;
  private GetSchoolService: getSchoolService;

  constructor(
    private globalLoginImpl:GlobalLogin,
    private globalSchoolImpl: GlobalSchool,
    private GetTeacherServiceImpl: getTeacherService,
    private GetSchoolServiceImpl: getSchoolService
  ){
this.globalLogin=globalLoginImpl;
this.globalSchool=globalSchoolImpl;
this.GetTeacherService=GetTeacherServiceImpl;
this.GetSchoolService=GetSchoolServiceImpl;
  }

login(email:string): void {
  if (email >""){
    //alert("Google login will be accessible here. No Session implemented yet.");
  var teacher:Teacher;
  teacher = this.GetTeacherService.getTeacherByMail(email);
  if (!teacher){
    alert("No Permission");
  }else {
    this.globalLogin.setLogin(teacher);
    this.globalSchool.setSchool(this.GetSchoolService.getSchool(teacher.belongsToSchool));
    location.href="/home";
  }

}
else{
  alert("Enter your Email address");
}
}
}
