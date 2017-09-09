import { Injectable } from '@angular/core';

import {Class } from '../types/types';
import {Note} from '../types/types';
import {School} from '../types/types';
import {Student} from '../types/types';
import {Teacher} from '../types/types';

import {Global} from './local.service';

import * as func from '../lib/functions';

@Injectable()
export class postSchoolService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public postSchool(school:School): number {return 0;}
}
@Injectable()
export class postClassService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public postClass(klasse:Class): number {return 0;}
}
@Injectable()
export class postStudentService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public postStudent(student:Student): number {return 0;}
}
@Injectable()
export class postNoteService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public postNote(note:Note): number {return 0;}
}
@Injectable()
export class postTeacherService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public postTeacher(teacher:Teacher): number {return 0;}
}
