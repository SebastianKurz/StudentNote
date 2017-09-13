import { Component, OnInit, OnDestroy } from '@angular/core';
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
this.GetClassService.getEntities(this.globalSchool.getSchool().id).then(c => this.classes = c);
}
}
ngOnInit() {
  this.init();
  }

  ngOnDestroy():void {

}
isStudents(){
 if (this.students.length > 0){
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
    this.PostClassService.postClass(new Class(null,name,level,belongsToSchool)).then(r => h = r);
    if (0==h){
        this.globalStatus.setStatus("Data submitted");
        this.showNewClass= false;
        //refesh Data
        this.init();
      }
      else{
        this.globalStatus.setStatus("[ERROR] submitting data");
      }
    }
    else{
    this.globalStatus.setStatus("enter some Values");
    }
  }
    updateClass(klasse : Class, key, value){
      var val :  any;
    if (klasse != null && key != null && value != null){
      val = value;
      klasse[key]=val;
      var h:number;
      this.UpdateClassService.updateClass(klasse).then(r => h = r);
      if (h==0){
          this.globalStatus.setStatus("Data submitted " + klasse[key]);
          this.init();
      }else{
          this.globalStatus.setStatus("[ERROR] submitting data");
      }
    }
    }
    deleteClass(klasse : Class){
      var h:number;
    this.DeleteClassService.deleteClass(klasse).then(r => h = r);
    if (h==0){
          this.globalStatus.setStatus("Data submitted");
          this.init();
      }else{
          this.globalStatus.setStatus("[ERROR] submitting data");
      }
    }
    getSchoolName(id : number){
      var school :School;
      this.GetSchoolService.getSchool(id).then(s => school = s);
      if (school!=null){
        return school.name;
      }else{
        return "not existing";
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
  this.GetStudentService.getEntities(klasse.id).then(s => this.students = s);
}
}
