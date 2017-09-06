import { Component } from '@angular/core';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

const STUDENTS: Student[] = [

];


@Component({
  selector: 'app',
  template: `
  <navbar></navbar>

  <div style="width: 64%;margin: 0 auto;align:center;">
  <div class="pane" style="display:block;float:left;">
<h2>{{title}}</h2>

      </div>
</div>
   `,
   styleUrls: ['./css/component.css']
})

export class StudentComponent {
  title = 'Schülerübersicht';
  students = STUDENTS;
  selectedStudent: Student;
/*
onSelect(school: School): void {
  this.selectedSchool = school;
}
*/
}
