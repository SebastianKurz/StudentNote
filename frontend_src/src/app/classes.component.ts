import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpModule, Http }    from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as func from './lib/functions';
import {Class, Note, School, Student, Teacher } from './types/types';
import {GlobalSchool, GlobalStatus, GlobalClass}from './service/local.service';
import {getClassService, getStudentService, getSchoolService} from './service/get.service';
import {postClassService} from './service/post.service';
import {updateClassService} from './service/update.service';
import {deleteClassService} from './service/delete.service';


@Component({
  selector: 'app',
  templateUrl: './html/classes.component.html',
   styleUrls: ['./css/component.css']
})

export class ClassesComponent {
  title : String;
  classes : Class[];
  students : Student[];
  schools : School[];
  teachers : Teacher[];
  selectedClass: Class;
  bbs : number;
  showNewClass : Boolean;
  private PostClassService: postClassService;
  private GetClassService: getClassService;
  private UpdateClassService: updateClassService;
  private DeleteClassService: deleteClassService;
  private GetStudentService: getStudentService;
  private GetSchoolService: getSchoolService;
  private globalSchool : GlobalSchool;
  private globalClass : GlobalClass;
  private globalStatus: GlobalStatus;

constructor(
  private PostClassServiceImpl: postClassService,
  private GetClassServiceImpl: getClassService,
  private UpdateClassServiceImpl: updateClassService,
  private DeleteClassServiceImpl: deleteClassService,
  private GetStudentServiceImpl: getStudentService,
    private GetSchoolServiceImpl: getSchoolService,
  private globalSchoolImpl : GlobalSchool,
  private globalClassImpl : GlobalClass,
  private globalStatusImpl: GlobalStatus
){
  this.title = 'Klassenübersicht';
  this.PostClassService=PostClassServiceImpl;
  this.GetClassService=GetClassServiceImpl;
  this.UpdateClassService=UpdateClassServiceImpl;
  this.DeleteClassService=DeleteClassServiceImpl;
  this.GetStudentService=GetStudentServiceImpl;
  this.GetSchoolService=GetSchoolServiceImpl;
  this.globalSchool=globalSchoolImpl;
  this.globalClass=globalClassImpl;
  this.globalStatus=globalStatusImpl;
  this.showNewClass = false;

}
init(){
  if(this.globalSchool.getSchool()){
this.GetClassService.getEntities(this.globalSchool.getSchool().id).subscribe(s => this.classes = s);
this.GetSchoolService.getSchools().subscribe(s => this.schools = s);
}
}
ngOnInit() {
  this.init();
  }

  ngOnDestroy():void {

}
isStudents(){
 if (this.students){
    return true;
  }else{
    return false;
  }
}

toggleNewClass(){
      if(this.showNewClass==false){
              this.selectedClass=null;
              this.students=null;
              this.showNewClass=true;
      }
      else{
        this.cancelNewClass();
      }
}
cancelNewClass(){
    this.showNewClass= false;
}
newClass(name:string,level:string,belongsToSchool:number){
    if (name > "" && level > "" && belongsToSchool > 0){var h : number;
    this.PostClassService.postClass(new Class(null,name,level,belongsToSchool)).subscribe(res => {
      if(res.id){
        this.showNewClass= false;
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
    updateClass(klasse : Class, key, value){
      var val :  any;
    if (klasse != null && key != null && value != null){
      val = value;
      klasse[key]=val;
      this.UpdateClassService.updateClass(klasse).subscribe(res => {
        if(res.id){
          this.globalStatus.setStatus("Data submitted");
          this.init();
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
    deleteClass(klasse : Class){
      var h:number;
      if (klasse.id >0){
    this.DeleteClassService.deleteClass(klasse).subscribe(res => {
      if(res.id){
        this.globalStatus.setStatus("Data submitted");
        this.init();
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
    getSchoolName(id : number){
       var school = func.find(this.schools,'id',id);
       if (school!=null){
         return school.name;
       }else{
         return "";
       }
      }
    isGlobalClass(id:number){
      if(this.globalClass.getClass() && this.globalClass.getClass().id == id){
      return true;
      }
      else{
      return false;
    }
    }
    getCurrentSchool(){
      return this.globalSchool.getSchool();
    }
    selectKlasse(klasse:Class){
      if (this.isGlobalClass(klasse.id)){
        this.globalClass.unsetClass();
      }else{
      this.globalClass.setClass(klasse);
    }
    }
selectClass(klasse: Class): void {
  this.cancelNewClass();
  this.selectedClass = klasse;
  this.students = null;
  this.GetStudentService.getEntities(klasse.id).subscribe(s => {
    if(s != null){
      this.students = s;
    }
    else{
      this.students = null;
    }
    });
}
}
