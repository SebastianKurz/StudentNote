import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {GlobalSchool}from './service/local.service';
import {GlobalStatus}from './service/local.service';

import {getTeacherService} from './service/get.service';
import {postStudentService} from './service/post.service';
import {getStudentService} from './service/get.service';
import {updateStudentService} from './service/update.service';
import {deleteStudentService} from './service/delete.service';
import {postNoteService} from './service/post.service';
import {getNoteService} from './service/get.service';
import {updateNoteService} from './service/update.service';
import {deleteNoteService} from './service/delete.service';


@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2 >{{title}}</h2>
<button class="button medium red" type="button" (click) = "toggleNewStudent()"><i class="fa fa-plus" aria-hidden="true"></i>
</button>
<ul class="L">
  <li class="LNO" *ngFor="let student of students "
    [class.selected]="student === selectedStudent"
    (click)="onSelect(student)">
    <div class="floatleft pane LPane">
    <div class="LText floatleft">{{student.lastname}}, {{student.firstname}}</div>
    </div>

  </li>
</ul>
</div>
<div class="floatleft widthnexttobar">
<div *ngIf="showNewStudent" class="pane floatleft" style="width:100%;">
  <h3>Neuen Schüler erfassen</h3>
  <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
      <input #a type="text" class="md-input" required [value]="NewStudent.firstname">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="md-input-label">Vorname</label>
    </div>
    <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
        <input #b type="text" class="md-input" required [value]="NewStudent.lastname">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="md-input-label">Nachname</label>
      </div>
        <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
            <input #c type="text" class="md-input" required [value]="NewStudent.belongsToClass">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="md-input-label">Klasse</label>
          </div>
          <div class="floatright">
          <button class="button small grey" type="button" (click)="cancelNewStudent()">Abbrechen</button>
          <button class="button small blue" style="margin: 0 .3em;" type="button" (click)="newStudent(a.value, b.value, c.value)">Anlegen</button>
          </div>
</div>

<div class="floatleft" *ngIf="selectedStudent" style="width:100%;">
      <div class="pane" style="width:100%">
      <h3 style="width:90%;">Details: {{selectedStudent.firstname}} {{selectedStudent.lastname}}</h3>
      <div class="del"><i class="fa fa-trash" aria-hidden="true" style="font-weight:600;font-size:150%;" (click)="deleteStudent(selectedStudent)"></i></div>
        <div class="group" style="margin-top:3em;margin-bottom:1em;">
            <input class="md-input" type="text" required [(ngModel)]="selectedStudent.firstname">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="md-input-label">Vorname</label>
          </div>
          <div class="group" style="margin-top:3em;margin-bottom:1em;">
              <input class="md-input" type="text" required [(ngModel)]="selectedStudent.lastname">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label class="md-input-label">Nachname</label>
            </div>
          <div style="margin-left:5px"><label>id: </label>{{selectedStudent.id}}</div>
        </div>

        <div *ngIf="isNotes(); then Bemerkungen else keineBemerkungen"></div>

        <ng-template #keineBemerkungen>
        <div class="pane" style="width:100%;margin-bottom:.3em;">
        <span style="width:40%;font-weight:600;font-size:130%;">Noch keine Bemerkungen</span>
        </div>
        </ng-template>

        <ng-template #Bemerkungen>
        <div class="pane" style="padding-top: 1em;padding-bottom:1em;margin-bottom:.3em;width:100%">
        <h3>Bemerkungen</h3>
        </div>

        <div *ngFor="let note of notes" class="pane" style="width:100%;margin-bottom:.3em;" >
        <div class="floatleft" style="width:40%;font-weight:600;" >{{note.timestamp | date: 'dd.MM.yyyy HH:mm'}}</div>
        <div class="floatleft" style="width:40%;font-weight:600;">erstellt von: {{this.getTeacherName(this.GetTeacherService.getTeacher(note.authorTeacherId))}}</div>
        <div class="del"><i class="fa fa-trash" aria-hidden="true" style="font-weight:600;font-size:150%;" (click)="deleteSelectedClass(selectedClass)"></i></div>
        <div class="clearfix"></div>
          <textarea style="width:95%;height:7em;border:none;padding-top:1em;align:center;"
            [class.selected]="note === selectedNote" >{{note.text}}
        </textarea>
        </div>
        </ng-template>
        </div>
        </div>

</div>
   `,
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
  id: number;
  private sub: any;
  private globalSchool : GlobalSchool;
  private globalStatus : GlobalStatus;
  private PostStudentService: postStudentService;
  private GetStudentService: getStudentService;
  private UpdateStudentService: updateStudentService;
  private DeleteStudentService: deleteStudentService;
  private GetTeacherService: getTeacherService;
  private PostNoteService: postNoteService;
  private GetNoteService: getNoteService;
  private UpdateNoteService: updateNoteService;
  private DeleteNoteService: deleteNoteService;

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
    private globalSchoolImpl : GlobalSchool,
    private globalStatusImpl : GlobalStatus
  ) {
    this.title='Schülerübersicht';
    this.globalSchool=globalSchoolImpl;
      this.globalStatus=globalStatusImpl;
    this.PostStudentService=PostStudentServiceImpl;
    this.GetStudentService=GetStudentServiceImpl;
    this.UpdateStudentService=UpdateStudentServiceImpl;
    this.DeleteStudentService=DeleteStudentServiceImpl;
    this.PostNoteService=PostNoteServiceImpl;
    this.GetNoteService=GetNoteServiceImpl;
    this.UpdateNoteService=UpdateNoteServiceImpl;
    this.DeleteNoteService=DeleteNoteServiceImpl;
    this.GetTeacherService=GetTeacherServiceImpl;
    this.showNewStudent=false;
    this.NewStudent=new Student(null,null,null,null);
    if(this.selectedStudent != null){this.notes=this.GetNoteService.getEntities(this.selectedStudent.id);}

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
    if (firstname > "" && lastname > ""  && belongsToClass > 0){
      this.PostStudentService.postStudent(new Student(null,firstname,lastname,belongsToClass));
      this.showNewStudent= false;
      //fetch new data
            this.init();
          }
    else{

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
      this.NewStudent =new Student(null,null,null,null);
      this.showNewStudent= false;
  }
  newNote(firstname:string,lastname:string,belongsToClass:number){
    if (firstname > "" && lastname > ""  && belongsToClass > 0){
      this.PostStudentService.postStudent(new Student(null,firstname,lastname,belongsToClass));
      this.showNewStudent= false;
      //fetch new data
            this.init();
          }
    else{

    }
  }

  getTeacherName(teacher : Teacher){
    return teacher.firstname + ' ' + teacher.lastname;
  }
init(){
  if(this.globalSchool.getSchool() != null ){
this.students = this.GetStudentService.getEntities(this.globalSchool.getSchool().id);
}else{
  this.students = this.GetStudentService.getStudents();
}
}
  ngOnInit() {
    this.init();
        this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
         //Ask Webservice
         this.selectedStudent = this.students.find(o => o.id === this.id);
      });
        if(this.selectedStudent){this.notes=this.GetNoteService.getEntities(this.selectedStudent.id);}
    }
    ngOnDestroy():void {
    this.sub.unsubscribe();
  }
  updateStudent(student :Student){
    if (this.UpdateStudentService.updateStudent(student)==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  deleteStudent(student : Student){
    if (this.DeleteStudentService.deleteStudent(student)==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  updateNote(note :Note){
    if (this.UpdateNoteService.updateNote(note)==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }
  deleteNote(note : Note){
    if (this.DeleteNoteService.deleteNote(note)==0){
        this.globalStatus.setStatus("Data submitted");
        this.init();
    }else{
        this.globalStatus.setStatus("ERROR during submitting data");
    }
  }

onSelect(student: Student): void {
  this.cancelNewStudent();
  this.selectedStudent = student;
  this.notes=this.GetNoteService.getEntities(student.id);
}

}
