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
  classes : Class[];
  teacher : Teacher;
  selectedStudent: Student;
  showNewStudent : Boolean;
  showNewNote : Boolean;
  NewStudent : Student;
  NewNote : Note;
  id: number;
  wait:boolean;
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
    this.wait=false;
    this.NewStudent=new Student(null,null,null,null);
    this.NewNote=new Note(null,null,null,null,null);


  }
  isNotes(){
   if (this.notes){
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
      this.PostStudentService.postStudent(new Student(null,firstname,lastname,belongsToClass)).subscribe(res => {
        if(res.id){
          this.showNewStudent= false;
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
      this.PostNoteService.postNote(new Note(null,text,timestamp,authorTeacherId,belongsToStudent)).subscribe(res => {
        if(res.id){
          this.showNewNote= false;
          this.globalStatus.setStatus("Data submitted");
          this.init();
          this.onSelect(this.selectedStudent);
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

  getTeacherName(id : number){
    var teacher = func.find(this.teachers,'id',id);
    if (teacher != null){
      return teacher.firstname + " "+ teacher.lastname;
    }else{
      return "";
    }
  }
  getLoginName(){
    var teacher = this.globalLogin.getLogin();
    if (teacher != null){
    return teacher.firstname +" "+teacher.lastname;
  }else{
    return "Not logged in!";
  }
  }
  getLoginId(){
    var teacher = this.globalLogin.getLogin();
    if (teacher != null){
    return teacher.id;
  }else{
    return "";
  }
  }
init(){
  if(this.globalSchool.getSchool()){
this.GetStudentService.getEntities(this.globalClass.getClass().id).subscribe(s => { this.students = s});
this.GetClassService.getEntities(this.globalSchool.getSchool().id).subscribe(s => this.classes = s);
this.GetTeacherService.getEntities(this.globalSchool.getSchool().id).subscribe(s => this.teachers = s);
}
}
  ngOnInit() {
    this.init();
        this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
         //Ask Webservice
         if (this.id){
           this.wait=true;
         setTimeout(() => {this.selectedStudent = this.students.find(o => o.id === this.id);this.GetNoteService.getEntities(this.selectedStudent.id).subscribe(s => {this.notes = s});this.wait=false;}, 2000);
       }

      });
    }
    ngOnDestroy():void {
  }
  updateStudent(student :Student,key:string,value){
    var val :  any;
  if (student != null && key != null && value != null){
    val = value;
    student[key]=val;
    var h:number;
    this.UpdateStudentService.updateStudent(student).subscribe(res => {
      if(res.id){
        this.globalStatus.setStatus("Data submitted");
        this.init();
        this.onSelect(func.find(this.students,'id',res.id));
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

  getNow(){
    var now=Date.now()+1;
    return now;
  }
  deleteStudent(student : Student){var h:number;
    if(student.id > 0){
  this.DeleteStudentService.deleteStudent(student).subscribe(res => {
    if(res.id){
      this.globalStatus.setStatus("Data submitted");
      this.init();
      this.selectedStudent=null;
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
  updateNote(note :Note,key:string,value){
    var val :  any;
  if (note != null && key != null && value != null){
    val = value;
    note[key]=val;

    this.UpdateNoteService.updateNote(note).subscribe(res => {
      if(res.id){
        this.showNewNote= false;
        this.globalStatus.setStatus("Data submitted");
        this.init();
        this.onSelect(this.selectedStudent);
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
  deleteNote(note : Note){var h:number;
    if(note.id > 0){
  this.DeleteNoteService.deleteNote(note).subscribe(res => {
    if(res.id){
      this.showNewNote= false;
      this.globalStatus.setStatus("Data submitted");
      this.init();
      this.onSelect(this.selectedStudent);
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
  getClassName(id : number){
    var klasse = func.find(this.classes,'id',id);
    if (klasse != null){
      return klasse.level + " "+ klasse.name;
    }else{
      return "";
    }
  }
  getCurrentClass(){
    return this.globalClass.getClass();
  }

onSelect(student: Student): void {
  this.cancelNewStudent();
  this.selectedStudent=student;
  this.notes = null;
  this.GetClassService.getEntities(this.globalSchool.getSchool().id).subscribe(s => this.classes = s);
  this.GetNoteService.getEntities(this.selectedStudent.id).subscribe(s => {
if(s != null){
 this.notes = s;
}else{
 this.notes = null;
}
    });
}

}
