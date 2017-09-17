import { Component , OnInit} from '@angular/core';
import { HttpModule, Http }    from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Teacher, School} from './types/types';

import {GlobalSchool, GlobalStatus}from './service/local.service';
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
  teacher : Teacher;
  wait:boolean;
  private router : Router;
  private globalLogin:GlobalLogin;
  private globalSchool: GlobalSchool;
  private globalStatus: GlobalStatus;
  private GetTeacherService: getTeacherService;
  private GetSchoolService: getSchoolService;

  constructor(
    private routerImpl : Router,
    private globalLoginImpl:GlobalLogin,
    private globalSchoolImpl: GlobalSchool,
    private globalStatusImpl: GlobalStatus,
    private GetTeacherServiceImpl: getTeacherService,
    private GetSchoolServiceImpl: getSchoolService
  ){
    this.router=routerImpl;
this.globalLogin=globalLoginImpl;
this.globalSchool=globalSchoolImpl;
this.globalStatus=globalStatusImpl;
this.GetTeacherService=GetTeacherServiceImpl;
this.GetSchoolService=GetSchoolServiceImpl;
this.wait=false;
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('CurrentTeacher')) && JSON.parse(localStorage.getItem('CurrentTeacher')).id){
      this.teacher = JSON.parse(localStorage.getItem('CurrentTeacher'));
      this.globalLogin.setLogin(this.teacher);
      this.GetSchoolService.getSchool(this.teacher.belongsToSchool).subscribe(s => {this.globalSchool.setSchool(s);});
      this.router.navigate(['/home']);
    }
  }

getLoginUser(email:string, password:string): void {
  if (email >""){
    //Google login will be accessible here.
    this.wait=true;
   this.GetTeacherService.getTeacherByMail(email,password).subscribe(t=> {this.teacher = t;this.globalLogin.setLogin(t);});
   if(this.wait){
     setTimeout(() => this.Login(), 3000);
   }}
 else{
   this.globalStatus.setStatus("Enter your Email address");
 }
 }

 Login(){
   this.wait=false;
   console.log(this.teacher);
  if (!(JSON.parse(localStorage.getItem('CurrentTeacher')) && JSON.parse(localStorage.getItem('CurrentTeacher')).id)){
    this.globalStatus.setStatus("No Permission");
  }else {
    this.globalLogin.setLogin(this.teacher);
    this.GetSchoolService.getSchool(this.teacher.belongsToSchool).subscribe(s => {console.log(s);this.globalSchool.setSchool(s);});
    this.router.navigate(['/home']);
  }
}
}
