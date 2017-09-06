import { Component } from '@angular/core';

import {FilterPipe} from './filter.pipe';

import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

const TEACHERS: Teacher[] = [

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

export class TeacherComponent {
  title = 'Liste der Lehrer';
  Teachers = TEACHERS;
  selectedTeacher: Teacher;

onSelect(teacher: Teacher): void {
  this.selectedTeacher = teacher;
}

}
