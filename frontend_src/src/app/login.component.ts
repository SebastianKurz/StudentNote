import { Component , OnInit} from '@angular/core';
import { HttpModule, Http }    from '@angular/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

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
  teacher : Teacher;
  wait:boolean;
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
this.wait=false;
  }

  ngOnInit() {
    if (this.teacher = JSON.parse(localStorage.getItem('CurrentTeacher'))){
        this.Login();
    }
  }

getLoginUser(email:string): void {
  if (email >""){
    //Google login will be accessible here.
    this.wait=true;
   this.GetTeacherService.getTeacherByMail(email).subscribe(t=> {this.teacher = t;});
   if(this.wait){
     setTimeout(() => this.Login(), 2000);
   }}
 else{
   alert("Enter your Email address");
 }
 }

 Login(){
   this.wait=false;
  if (!this.teacher){
    alert("No Permission");
  }else {
    this.globalLogin.setLogin(this.teacher);
    this.GetSchoolService.getSchool(this.teacher.belongsToSchool).subscribe(s => {this.globalSchool.setSchool(s);});
    this.router.navigate(['/home']);
  }
}
}
