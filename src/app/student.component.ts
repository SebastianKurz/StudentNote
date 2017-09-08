import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {STUDENTS} from './dummy.data';
import {NOTES} from './dummy.data';
import {TEACHERS} from './dummy.data';

import {getTeacherService} from './service/get.service';
import {getStudentService} from './service/get.service';
import {getNoteService} from './service/get.service';


@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2 >{{title}}</h2>
<button class="button medium red" type="button" (click) = "toggleNewStudent()"><i class="fa fa-plus" aria-hidden="true"></i>
</button>
<ul class="listing">
  <li class="nobadge" *ngFor="let student of students "
    [class.selected]="student === selectedStudent"
    (click)="onSelect(student)">
    {{student.lastname}}, {{student.firstname}}
  </li>
</ul>
</div>
<div class="floatleft widthnexttobar">
<div *ngIf="showNewStudent" class="pane floatleft" style="width:100%;">
  <h3>Neuen Schüler erfassen</h3>
  <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
      <input type="text" class="md-input" required [value]="NewStudent.firstname">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="md-input-label">Vorname</label>
    </div>
    <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
        <input type="text" class="md-input" required [value]="NewStudent.lastname">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="md-input-label">Nachname</label>
      </div>
        <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;">
            <input type="text" class="md-input" required [value]="NewStudent.belongsToClass">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="md-input-label">Klasse</label>
          </div>
          <div class="floatright">
          <button class="button small grey" type="button" (click)="cancelNewStudent()">Abbrechen</button>
          <button class="button small blue" style="margin: 0 .3em;" type="button" (click)="newStudent()">Anlegen</button>
          </div>
</div>
<div class="floatleft" *ngIf="selectedStudent" style="width:100%;">
      <div class="pane" style="width:100%">
      <h3>Details: {{selectedStudent.firstname}} {{selectedStudent.lastname}}</h3>
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

        <div *ngIf="notes; then Bemerkungen else keineBemerkungen"></div>

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
        <div class="clearfix"></div>
          <textarea readonly style="width:95%;height:7em;border:none;padding-top:1em;align:center;"
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
  NewStudent : Student;
  id: number;
  private sub: any;
  private GetStudentService: getStudentService;
  private GetNoteService: getNoteService;
  private GetTeacherService: getTeacherService;

  constructor(private route: ActivatedRoute, private GetStudentServiceImpl: getStudentService, private GetTeacherServiceImpl: getTeacherService, private GetNoteServiceImpl: getNoteService) {
    this.title='Schülerübersicht';
    this.GetStudentService=GetStudentServiceImpl;
    this.GetNoteService=GetNoteServiceImpl;
    this.GetTeacherService=GetTeacherServiceImpl;
    this.showNewStudent=false;
    this.NewStudent=new Student(null,null,null,null);
    if(this.selectedStudent != null){this.notes=this.GetNoteService.getEntities(this.selectedStudent.id);}

  }

  toggleNewStudent():void{
        if(this.showNewStudent==false){
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
  newStudent():void{
    //klasse anlegen und danach verstecken
      this.showNewStudent= false;
  }

  getTeacherName(teacher : Teacher){
    return teacher.firstname + ' ' + teacher.lastname;
  }

  ngOnInit() {
    this.students=this.GetStudentService.getStudents();
      this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
         //Ask Webservice
         this.selectedStudent = this.students.find(o => o.id === this.id);
      });
        if(this.selectedStudent != null){this.notes=this.GetNoteService.getEntities(this.selectedStudent.id);}
    }
    ngOnDestroy():void {
    this.sub.unsubscribe();
  }

onSelect(student: Student): void {
  this.cancelNewStudent();
  this.selectedStudent = student;
  this.notes=this.GetNoteService.getEntities(student.id);
}

}
