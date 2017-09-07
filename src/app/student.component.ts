import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

import {STUDENTS} from './dummy.data';


@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane leftbar">
<h2 >{{title}}</h2>


<ul class="listing">
  <li class="nobadge" *ngFor="let student of students"
    [class.selected]="student === selectedStudent"
    (click)="onSelect(student)">

    {{student.firstname}} {{student.lastname}}
  </li>
</ul>
      </div>

      <div *ngIf="selectedStudent" class="pane floatleft widthnexttobar">
      <div class="clearfix"></div>
        <div class="group" style="margin-top:3em;margin-bottom:1em;">
            <input type="text" required [(ngModel)]="selectedStudent.firstname">
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="input">Firstname</label>
          </div>
          <div class="group" style="margin-top:3em;margin-bottom:1em;">
              <input type="text" required [(ngModel)]="selectedStudent.lastname">
              <span class="highlight"></span>
              <span class="bar"></span>
              <label class="input">Lastname</label>
            </div>
          <div style="margin-left:5px"><label>id: </label>{{selectedStudent.id}}</div>
        </div>

</div>
   `,
   styleUrls: ['./css/component.css']
})

export class StudentComponent implements OnInit, OnDestroy{
  title = 'Schülerübersicht';
  students = STUDENTS;
  selectedStudent: Student;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number

         // In a real app: dispatch action to load the details here.
         //Ask Webservice
         //this.selectedStudent = {id: 10, firstname:'Anton',lastname:'Müller',belongsToClass:8};
         this.selectedStudent = this.students.find(o => o.id === this.id);
      });
    }
    ngOnDestroy() {
    this.sub.unsubscribe();
  }

onSelect(student: Student): void {
  this.selectedStudent = student;
}

}
