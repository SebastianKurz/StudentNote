import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpModule, Http }    from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as func from './lib/functions';
import {Class, Note, Teacher,Student, School } from './types/types';
import {GlobalSchool, GlobalStatus, GlobalLogin}from './service/local.service';
import {postTeacherService} from './service/post.service';
import {getTeacherService, getSchoolService} from './service/get.service';
import {updateTeacherService} from './service/update.service';
import {deleteTeacherService} from './service/delete.service';


@Component({
  selector: 'app',
  templateUrl: './html/teacher.component.html',
   styleUrls: ['./css/component.css']
})

export class TeacherComponent {
  title : string;
  teachers : Teacher[];
  schools : School[];
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
  private GetSchoolService: getSchoolService;

  constructor(
    private route: ActivatedRoute,
    private PostTeacherServiceImpl: postTeacherService,
    private GetTeacherServiceImpl: getTeacherService,
    private UpdateTeacherServiceImpl: updateTeacherService,
    private DeleteTeacherServiceImpl: deleteTeacherService,
    private GetSchoolServiceImpl:getSchoolService,
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
    this.GetSchoolService=GetSchoolServiceImpl;
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
      this.PostTeacherService.postTeacher(new Teacher(null,firstname,lastname,mailAddress,password,belongsToSchool)).subscribe(res => {
        if(res.id){
          this.showNewTeacher= false;
          this.globalStatus.setStatus("Data submitted");
          this.init();
        }
        else{
          this.globalStatus.setStatus(res.error);
        }
      });
    }
    else{
      this.globalStatus.setStatus("Enter required Values");
    }
}
updateTeacher(teacher :Teacher, key:string, value){
  var val :  any;
if (teacher != null && key != null && value != null){
  val = value;
  teacher[key]=val;
  var h : number;
  this.UpdateTeacherService.updateTeacher(teacher).subscribe(res => {
    if(res.id){
      this.globalStatus.setStatus("Data submitted");
      this.init();
      this.selectTeacher(func.find(this.teachers,'id',res.id));
    }
    else{
      this.globalStatus.setStatus(res.error);
    }
  });
}
else{
  this.globalStatus.setStatus("No changes");
}
}
deleteTeacher(teacher : Teacher){
  var h : number;
  if(teacher.id > 0) {
  this.DeleteTeacherService.deleteTeacher(teacher).subscribe(res => {
    if(res.id){
      this.globalStatus.setStatus("Data submitted");
      this.init();
      this.selectTeacher=null;
    }
    else{
      this.globalStatus.setStatus(res.error);
    }
  });
}
else{
  this.globalStatus.setStatus("Nothing to delete!");
}
}
init(){
  if(this.globalSchool.getSchool()){
this.GetTeacherService.getEntities(this.globalSchool.getSchool().id).subscribe( s => this.teachers =  s);
this.GetSchoolService.getSchools().subscribe(s => this.schools = s );
}
}
updatePW(){
  
}
ngOnInit() {
this.init();
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       //Ask Webservice
       if (this.id){
       setTimeout(() => {this.selectedTeacher = this.teachers.find(o => o.id === this.id);}, 2000);
     }

    });

  }
  ngOnDestroy() {
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
  this.globalStatus.setStatus("You cannot change your user. Please relogin with the desired user.");
}
getSchoolName(id : number){
  var school = func.find(this.schools, 'id' ,id);
  if (school!=null){
    return school.name;
  }else{
    return "";
  }

}
getCurrentSchool(){
  return this.globalSchool.getSchool();
}

selectTeacher(teacher: Teacher): void {
  this.cancelNewTeacher();
  this.selectedTeacher = teacher;
}

}
