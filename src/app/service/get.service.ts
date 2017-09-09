import { Injectable } from '@angular/core';

import {Class } from '../types/types';
import {Note} from '../types/types';
import {School} from '../types/types';
import {Student} from '../types/types';
import {Teacher} from '../types/types';

import {Global} from './local.service';

import * as func from '../lib/functions';

@Injectable()
export class getSchoolService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public getSchools(): School[] {return func.sort(this.global.gSchools,'name','asc');}
  public getSchool(id:number): School {return func.find(this.global.gSchools,'id',id)}
}

@Injectable()
export class getClassService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public getClasses(): Class[] {return func.sort(this.global.gClasses,'level','asc');}
  public getClass(id:number):Class {return func.find(this.global.gClasses, 'id' , id);}
  public getEntities(id:number):Class[] {return func.filter( this.global.gClasses ,'belongsToSchool' ,id);}
}

@Injectable()
export class getStudentService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public getStudents(): Student[] {return func.sort(this.global.gStudents,'lastname','asc');}
  public getStudent(id:number):Student {return func.find(this.global.gStudents, 'id' , id);}
  public getEntities(id:number):Student[] {return func.filter( this.global.gStudents ,'belongsToClass' ,id);}
}

@Injectable()
export class getNoteService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public getNotes(): Note[] {return func.sort(this.global.gNotes,'timestamp','dsc');}
  public getNote(id:number):Note {return func.find(this.global.gNotes, 'id' , id);}
  public getEntities(id:number):Note[] {return func.filter(this.global.gNotes, 'belongsToStudent' ,id);}
}
@Injectable()
export class getTeacherService {private global : Global;
constructor (private globalData : Global){
this.global=globalData;
}
  public getTeachers(): Teacher[] {return func.sort(this.global.gTeachers,'lastname','asc');}
  public getTeacher(id:number):Teacher {return func.find(this.global.gTeachers, 'id' , id);}
  public getEntities(id:number):Teacher[] {return func.filter(this.global.gTeachers,'belongsToSchool' ,id);}
}
