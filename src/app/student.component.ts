import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {STUDENTS} from './dummy.data';
import {NOTES} from './dummy.data';
import {TEACHERS} from './dummy.data';


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
  <li class="nobadge" *ngFor="let student of students"
    [class.selected]="student === selectedStudent"
    (click)="onSelect(student)">
    {{student.firstname}} {{student.lastname}}
  </li>
</ul>
</div>

<div *ngIf="showNewStudent" class="pane floatleft widthnexttobar">
  <h3>Neuen Schüler erfassen</h3>
  <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
      <input type="text" required [value]="NewStudent.firstname">
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="input">Vorname</label>
    </div>
    <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
        <input type="text" required [value]="NewStudent.lastname">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="input">Nachname</label>
      </div>
        <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
            <input type="text" required [value]="NewStudent.belongsToClass">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="input">Klasse</label>
          </div>
      <div class="group floatleft" style="margin-top:3em;margin-bottom:1em;min-width:20em;max-width:30em;">
          <input type="text" required [value]="NewStudent.id">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label class="input">ID</label>
        </div>
  <div class="">
  <button class="button small blue floatright" style="margin-left:.3em;" type="button" (click)="newStudent()">Anlegen</button>
  <button class="button small grey floatright" type="button" (click)="cancelNewStudent()">Abbrechen</button>
  </div>
</div>

      <div *ngIf="selectedStudent" class="pane floatleft widthnexttobar">
      <h3>Details: {{selectedStudent.firstname}} {{selectedStudent.lastname}}</h3>
      <div class="clearfix"></div>
        <div class="group" style="margin-top:3em;margin-bottom:1em;">
            <input type="text" required [(ngModel)]="selectedStudent.firstname">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="input">Vorname</label>
          </div>
          <div class="group" style="margin-top:3em;margin-bottom:1em;">
              <input type="text" required [(ngModel)]="selectedStudent.lastname">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label class="input">Nachname</label>
            </div>
          <div style="margin-left:5px"><label>id: </label>{{selectedStudent.id}}</div>
        </div>

        <div *ngIf="selectedStudent" class="pane floatleft widthnexttobar" style="padding-top: 1em;padding-bottom:1em;margin-bottom:.3em;">
        <h3>Bemerkungen</h3>
        </div>
        <div *ngIf="selectedStudent" class="floatleft widthnexttobar">
        <div *ngFor="let note of notes" class="pane" style="width:100%;margin-bottom:.3em;" >
        <div>Datum: {{note.timestamp}}</div>
        <div >Lehrer: {{note.authorTeacherId}}</div>
          <textarea style="width:100%;height:7em;border:none;padding-top:1em;"
            [class.selected]="note === selectedNote" >{{note.text}} {{note.tname}}
        </textarea>
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
  selectedStudent: Student;
  showNewStudent : Boolean;
  NewStudent : Student;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {
    this.title='Schülerübersicht';
    this.students=STUDENTS;
    this.showNewStudent=false;
    this.NewStudent=new Student(null,null,null,null);
    this.notes=NOTES;
    this.teachers=TEACHERS;
  }

  toggleNewStudent(){
        if(this.showNewStudent==false){
                this.showNewStudent=true;
        }
        else{
          this.cancelNewStudent();
        }
  }
  cancelNewStudent(){
      this.NewStudent =new Student(null,null,null,null);
      this.showNewStudent= false;
  }
  newStudent(){
    //klasse anlegen und danach verstecken
      this.showNewStudent= false;
  }

findTeacher(id:number){
  return this.teachers.find(o => o.id === this.id);
}

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
         //Ask Webservice
         this.selectedStudent = this.students.find(o => o.id === this.id);
      });
    }
    ngOnDestroy() {
    this.sub.unsubscribe();
  }

onSelect(student: Student): void {
  this.selectedStudent = student;
  this.notes=NOTES;
  this.teachers=TEACHERS;
}

}
