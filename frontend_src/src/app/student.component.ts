import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpModule, Http }    from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { DatePipe } from '@angular/common';
import * as func from './lib/functions';
import {Class, Note, School, Student, Teacher } from './types/types';
import {GlobalSchool,GlobalClass,GlobalStatus, GlobalLogin}from './service/local.service';
import {getTeacherService, getStudentService, getNoteService, getClassService} from './service/get.service';
import {updateStudentService, updateNoteService} from './service/update.service';
import {deleteStudentService, deleteNoteService} from './service/delete.service';
import {postStudentService, postNoteService} from './service/post.service';


@Component({
  selector: 'app',
  templateUrl: './html/student.component.html',
   styleUrls: ['./css/component.css']
})

export class StudentComponent implements OnInit, OnDestroy{
  title : string;
  students : Student[];
  notes : Note[];
  teachers : Teacher[];
  teacher : Teacher;
  selectedStudent: Student;
  showNewStudent : Boolean;
  showNewNote : Boolean;
  NewStudent : Student;
  NewNote : Note;
  id: number;
  private sub: any;
  private globalSchool : GlobalSchool;
  private globalClass : GlobalClass;
  private globalStatus : GlobalStatus;
  private globalLogin : GlobalLogin;
  private PostStudentService: postStudentService;
  private GetStudentService: getStudentService;
  private UpdateStudentService: updateStudentService;
  private DeleteStudentService: deleteStudentService;
  private GetTeacherService: getTeacherService;
  private PostNoteService: postNoteService;
  private GetNoteService: getNoteService;
  private UpdateNoteService: updateNoteService;
  private DeleteNoteService: deleteNoteService;
  private GetClassService : getClassService;

  constructor(
    private route: ActivatedRoute,
    private PostStudentServiceImpl: postStudentService,
    private GetStudentServiceImpl: getStudentService,
    private UpdateStudentServiceImpl: updateStudentService,
    private DeleteStudentServiceImpl: deleteStudentService,
    private GetTeacherServiceImpl: getTeacherService,
    private PostNoteServiceImpl: postNoteService,
    private GetNoteServiceImpl: getNoteService,
    private UpdateNoteServiceImpl: updateNoteService,
    private DeleteNoteServiceImpl: deleteNoteService,
    private GetClassServiceImpl:getClassService,
    private globalSchoolImpl : GlobalSchool,
    private globalClassImpl : GlobalClass,
    private globalStatusImpl : GlobalStatus,
    private globalLoginImpl : GlobalLogin,
  ) {
    this.title='Schülerübersicht';
    this.globalSchool=globalSchoolImpl;
    this.globalClass=globalClassImpl;
      this.globalStatus=globalStatusImpl;
      this.globalLogin=globalLoginImpl;
    this.PostStudentService=PostStudentServiceImpl;
    this.GetStudentService=GetStudentServiceImpl;
    this.UpdateStudentService=UpdateStudentServiceImpl;
    this.DeleteStudentService=DeleteStudentServiceImpl;
    this.PostNoteService=PostNoteServiceImpl;
    this.GetNoteService=GetNoteServiceImpl;
    this.UpdateNoteService=UpdateNoteServiceImpl;
    this.DeleteNoteService=DeleteNoteServiceImpl;
    this.GetTeacherService=GetTeacherServiceImpl;
    this.GetClassService=GetClassServiceImpl;
    this.showNewStudent=false;
    this.showNewNote=false;
    this.NewStudent=new Student(null,null,null,null);
    this.NewNote=new Note(null,null,null,null,null);


  }
  isNotes(){
   if (this.notes.length > 0){
      return true;
    }else{
      return false;
    }
  }

  toggleNewStudent():void{
        if(this.showNewStudent==false){
          this.selectedStudent=null;
                this.showNewStudent=true;
        }
        else{
          this.cancelNewStudent();
        }
  }
  cancelNewStudent():void{
      this.NewStudent =new Student(null,null,null,null);
      this.showNewStudent= false;
  }
  newStudent(firstname:string,lastname:string,belongsToClass:number){
    if (firstname > "" && lastname > "" && belongsToClass > 0){
      var h : number;
      this.PostStudentService.postStudent(new Student(null,firstname,lastname,belongsToClass)).then(r => h = r,()=>  location.href="/noc");
      if (0==h){
      this.showNewStudent= false;
      this.globalStatus.setStatus("Data submitted");
      //fetch new data
          this.init();
        }
        else{
          this.globalStatus.setStatus("[ERROR] submitting data");
        }}
    else{
      this.globalStatus.setStatus("Enter required Values");
    }
  }
  toggleNewNote():void{
        if(this.showNewNote==false){
                this.showNewNote=true;
        }
        else{
          this.cancelNewNote();
        }
  }
  cancelNewNote():void{
      this.NewNote =new Note(null,null,null,null,null);
      this.showNewNote= false;
  }
  newNote(text:string,timestamp:number,authorTeacherId:number,belongsToStudent:number){
    if (text > "" && timestamp > 0 && authorTeacherId != null && belongsToStudent > 0){
      var h : number;
      this.PostNoteService.postNote(new Note(null,text,timestamp,authorTeacherId,belongsToStudent)).then(s => h = s,()=>  location.href="/noc");
      if (0==h){
      this.showNewNote= false;
      this.globalStatus.setStatus("Data submitted");
      //fetch new data
          this.init();
        }else{
          this.globalStatus.setStatus("[ERROR] submitting data");
      }
      }
    else{
      this.globalStatus.setStatus("Enter required Values");
    }
}

  getTeacherName(teacher : Teacher){
    return teacher.firstname + ' ' + teacher.lastname;
  }
  getLoginName(){
    var teacher = this.globalLogin.getLogin();
    if (teacher != null){
    return this.getTeacherName(teacher);
  }else{
    return "Not logged in!";
  }
  }
  getLoginId(){
    var teacher = this.globalLogin.getLogin();
    if (teacher != null){
    return teacher.id;
  }else{
    return "-1";
  }
  }
init(){
  if(this.globalSchool.getSchool()){
  this.GetStudentService.getEntities(this.globalClass.getClass().id).then((s) => this.students = s,()=>  location.href="/noc");
}
}
  ngOnInit() {
    this.init();
        this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
         //Ask Webservice
         this.selectedStudent = this.students.find(o => o.id === this.id);
      });
        if(this.selectedStudent){this.GetNoteService.getEntities(this.selectedStudent.id).then((n) => this.notes = n,()=>  location.href="/noc");
        }
    }
    ngOnDestroy():void {
    this.sub.unsubscribe();
  }
  updateStudent(student :Student,key:string,value){
    var val :  any;
  if (student != null && key != null && value != null){
    val = value;
    student[key]=val;
    var h:number;
    this.UpdateStudentService.updateStudent(student).then(r => h=r,()=>  location.href="/noc");
    if (h==0){
        this.globalStatus.setStatus("Data submitted " + student[key]);
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  }

  getNow(){
    var now=Date.now()+1;
    return now;
  }
  deleteStudent(student : Student){var h:number;
  this.DeleteStudentService.deleteStudent(student).then(r => h=r,()=>  location.href="/noc");
  if (h==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  updateNote(note :Note,key:string,value){
    var val :  any;
  if (note != null && key != null && value != null){
    val = value;
    note[key]=val;var h:number;
    this.UpdateNoteService.updateNote(note).then(r => h=r,()=>  location.href="/noc");
    if (h==0){
        this.globalStatus.setStatus("Data submitted " + note[key]);
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  }
  deleteNote(note : Note){var h:number;
  this.DeleteNoteService.deleteNote(note).then(r => h=r,()=>  location.href="/noc");
  if (h==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  getClassName(id : number){
    var klasse : Class;

    this.GetClassService.getClass(this.globalSchool.getSchool().id,id).then((c)=> klasse = c,()=>  location.href="/noc");
    if (klasse != null){
      return klasse.name;
    }else{
      return "not existing";
    }

  }

onSelect(student: Student): void {
  this.cancelNewStudent();
  this.GetNoteService.getEntities(student.id).then((n) => this.notes = n,()=>  location.href="/noc");
}

}
