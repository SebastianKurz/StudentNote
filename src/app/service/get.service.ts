import { Injectable } from '@angular/core';

import {Class } from '../types/types';
import {Note} from '../types/types';
import {School} from '../types/types';
import {Student} from '../types/types';
import {Teacher} from '../types/types';

import {SCHOOLS} from '../dummy.data';
import {CLASSES} from '../dummy.data';
import {STUDENTS} from '../dummy.data';
import {NOTES} from '../dummy.data';
import {TEACHERS} from '../dummy.data';

import * as func from '../lib/functions';

@Injectable()
export class getSchoolService {
  public getSchools(): School[] {return func.sort(SCHOOLS,'name','asc');}
  public getSchool(id:number): School {return func.find(SCHOOLS,'id',id)}
}

@Injectable()
export class getClassService {
  public getClasses(): Class[] {return func.sort(CLASSES,'level','asc');}
  public getClass(id:number):Class {return func.find(CLASSES, 'id' , id);}
  public getEntities(id:number):Class[] {return func.filter( CLASSES ,'belongsToSchool' ,id);}
}

@Injectable()
export class getStudentService {
  public getStudents(): Student[] {return func.sort(STUDENTS,'lastname','asc');}
  public getStudent(id:number):Student {return func.find(STUDENTS, 'id' , id);}
  public getEntities(id:number):Student[] {return func.filter( STUDENTS ,'belongsToClass' ,id);}
}

@Injectable()
export class getNoteService {
  public getNotes(): Note[] {return func.sort(NOTES,'timestamp','dsc');}
  public getNote(id:number):Note {return func.find(NOTES, 'id' , id);}
  public getEntities(id:number):Note[] {return func.filter(NOTES,'belongsToStudents' ,id);}
}
@Injectable()
export class getTeacherService {
  public getTeachers(): Teacher[] {return func.sort(TEACHERS,'lastname','asc');}
  public getTeacher(id:number):Teacher {return func.find(TEACHERS, 'id' , id);}
  public getEntities(id:number):Teacher[] {return func.filter(TEACHERS,'belongsToSchool' ,id);}
}
