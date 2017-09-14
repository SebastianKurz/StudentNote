import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {Teacher, School} from './types/types';

import {GlobalSchool}from './service/local.service';
import {GlobalLogin}from './service/local.service';
import {getTeacherService} from './service/get.service';
import {getSchoolService} from './service/get.service';

@Component({
  selector: 'app',
  templateUrl: './html/login.component.html',
styleUrls: ['./css/component.css']
})

export class LoginComponent {
  title = 'Studentnote';
  private router : Router;
  private globalLogin:GlobalLogin;
  private globalSchool: GlobalSchool;
  private GetTeacherService: getTeacherService;
  private GetSchoolService: getSchoolService;

  constructor(
    private routerImpl : Router,
    private globalLoginImpl:GlobalLogin,
    private globalSchoolImpl: GlobalSchool,
    private GetTeacherServiceImpl: getTeacherService,
    private GetSchoolServiceImpl: getSchoolService
  ){
    this.router=routerImpl;
this.globalLogin=globalLoginImpl;
this.globalSchool=globalSchoolImpl;
this.GetTeacherService=GetTeacherServiceImpl;
this.GetSchoolService=GetSchoolServiceImpl;
  }

login(email:string): void {
  if (email >""){
    //Google login will be accessible here. No Session implemented yet.
  var teacher:Teacher;
  this.GetTeacherService.getTeacherByMail(email).then(t => teacher = t,()=>  location.href="/404");
  if (!teacher){
    alert("No Permission");
  }else {
    this.globalLogin.setLogin(teacher);
    var s : School;
    this.GetSchoolService.getSchool(teacher.belongsToSchool).then(r => s=r,()=>  location.href="/404");
    this.globalSchool.setSchool(s);
    this.router.navigate(['/home']);

  }

}
else{
  alert("Enter your Email address");
}
}
}
