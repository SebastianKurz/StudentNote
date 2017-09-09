import { Injectable } from '@angular/core';

import {Class } from '../types/types';
import {Note} from '../types/types';
import {School} from '../types/types';
import {Student} from '../types/types';
import {Teacher} from '../types/types';

import {Global} from './local.service';

import * as func from '../lib/functions';

@Injectable()
export class deleteSchoolService {
  private global : Global;
  constructor (private globalData : Global){
  this.global=globalData;
  }
  public deleteSchool(school:School): number {return 0;}
}
@Injectable()
export class deleteClassService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public deleteClass(klasse:Class): number {return 0;}
}
@Injectable()
export class deleteStudentService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public deleteStudent(student:Student): number {return 0;}
}
@Injectable()
export class deleteNoteService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public deleteNote(note:Note): number {return 0;}
}
@Injectable()
export class deleteTeacherService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public deleteTeacher(teacher:Teacher): number {return 0;}
}
