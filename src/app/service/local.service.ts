import { Injectable } from '@angular/core';

import {SCHOOLS} from '../dummy.data';
import {CLASSES} from '../dummy.data';
import {STUDENTS} from '../dummy.data';
import {NOTES} from '../dummy.data';
import {TEACHERS} from '../dummy.data';

import {Class } from '../types/types';
import {Note} from '../types/types';
import {School} from '../types/types';
import {Student} from '../types/types';
import {Teacher} from '../types/types';

import * as func from '../lib/functions';

var globalSchool:School;
var globalStatus : string = null;

@Injectable()
export class GlobalSchool {
  public setSchool(school:School): number {
    globalSchool = school;
    return 0;}
  public unsetSchool(): number {
    globalSchool = null;
    return 0;}
  public getSchool():School{
    return globalSchool;
  }
}
@Injectable()
export class GlobalStatus {
  public setStatus(status){
    globalStatus = status;
    setTimeout(() => globalStatus = null, 2000);
    }
  public unsetStatus(): number {
    globalStatus = null;
    return 0;}
  public getStatus(){
    return globalStatus;
  }
}
@Injectable()
export class Global {
  public gSchools:School[] = SCHOOLS;
  public gClasses:Class[] = CLASSES;
  public gStudents:Student[] = STUDENTS;
  public gNotes:Note[] = NOTES;
  public gTeachers:Teacher[] = TEACHERS;
}
