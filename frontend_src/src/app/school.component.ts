import { Component } from '@angular/core';

import * as func from './lib/functions';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {GlobalStatus} from './service/local.service';
import {GlobalSchool} from './service/local.service';

import {postSchoolService}from './service/post.service';
import {getSchoolService}from './service/get.service';
import {updateSchoolService}from './service/update.service';
import {deleteSchoolService}from './service/delete.service';

@Component({
  selector: 'app',
  templateUrl: './html/school.component.html',
   styleUrls: ['./css/component.css']
})

export class SchoolComponent {
  title : string;
  schools : School[];
  selectedSchool: School;
  showNewSchool : Boolean;
  NewSchool : School;
  private globalSchool : GlobalSchool;
  private globalStatus : GlobalStatus;
  private PostSchoolService : postSchoolService;
  private GetSchoolService: getSchoolService;
  private UpdateSchoolService: updateSchoolService;
  private DeleteSchoolService: deleteSchoolService;

  constructor(
    private globalSchoolImpl : GlobalSchool,
    private globalStatusImpl : GlobalStatus,
    private PostSchoolServiceImpl : postSchoolService,
    private GetSchoolServiceImpl: getSchoolService,
    private UpdateSchoolServiceImpl: updateSchoolService,
    private DeleteSchoolServiceImpl: deleteSchoolService
  ){
    this.title = 'Liste der Schulen';
    this.globalSchool=globalSchoolImpl;
    this.globalStatus=globalStatusImpl;
    this.PostSchoolService=PostSchoolServiceImpl;
    this.GetSchoolService=GetSchoolServiceImpl;
    this.UpdateSchoolService=UpdateSchoolServiceImpl;
    this.DeleteSchoolService=DeleteSchoolServiceImpl;
    this.showNewSchool = false;
    this.NewSchool = new School(null , null);
  }
  init(){
    this.GetSchoolService.getSchools().then((s) => this.schools = s,()=>  location.href="/404");
  }
  ngOnInit() {
    this.init();
    }

    ngOnDestroy():void {

  }
  isGlobalSchool(id:number){
    if(this.globalSchool.getSchool() && this.globalSchool.getSchool().id == id){
    return true;
    }
    else{
    return false;
  }
  }
  selectSchool(school:School){
    if (this.isGlobalSchool(school.id)){
      this.globalSchool.unsetSchool();
    }else{
    this.globalSchool.setSchool(school);
  }
  }

  toggleNewSchool(){
        if(this.showNewSchool==false){
                this.selectedSchool=null;
                this.showNewSchool=true;
        }
        else{
          this.cancelNewSchool();
        }
  }
  cancelNewSchool(){
      this.NewSchool = new School( null , null );
      this.showNewSchool= false;
  }
  newSchool(name:string){
    if (name > ""){
      var h : number;
      this.PostSchoolService.postSchool(new School(null,name)).then(s => h=s,()=>  location.href="/404");
      this.showNewSchool= false;
      this.globalStatus.setStatus("Data submitted");
      //fetch new data
          this.init();
          }
    else{
      this.globalStatus.setStatus("Enter required Values");
    }
}
  updateSchool(school :School,key,value){
    var val:  any;
  if (school != null  && key != null && value != null){
    val = value;
    school[key]=val;var h:number;
    this.UpdateSchoolService.updateSchool(school).then(r => h=r,()=>  location.href="/404");
    if (h==0){
        this.globalStatus.setStatus("Data submitted " + school[key]);
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  }
  deleteSchool(school : School){var h:number;
  this.DeleteSchoolService.deleteSchool(school).then(r => h=r,()=>  location.href="/404");
  if (h==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }

onSelect(school: School): void {
  this.cancelNewSchool();
  this.selectedSchool = school;
}

}
