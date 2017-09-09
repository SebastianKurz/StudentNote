import { Injectable } from '@angular/core';

import {Class } from '../types/types';
import {Note} from '../types/types';
import {School} from '../types/types';
import {Student} from '../types/types';
import {Teacher} from '../types/types';

import {Global} from './local.service';

import * as func from '../lib/functions';

@Injectable()
export class updateSchoolService {
private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public updateSchool(school:School): number {return 0;}
}
@Injectable()
export class updateClassService {
  private global : Global;
  constructor (private globalData : Global){
  this.global=globalData;
  }
  public updateClass(klasse:Class) : number {return 0;}
}
@Injectable()
export class updateStudentService {
  private global : Global;
  constructor (private globalData : Global){
  this.global=globalData;
  }
  public updateStudent(student:Student): number {return 0;}
}
@Injectable()
export class updateNoteService {
  private global : Global;
  constructor (private globalData : Global){
  this.global=globalData;
  }
  public updateNote(note:Note): number {return 0;}
}
@Injectable()
export class updateTeacherService {
  private global : Global;
  constructor (private globalData : Global){
  this.global=globalData;
  }
  public updateTeacher(teacher:Teacher): number {return 0;}
}
