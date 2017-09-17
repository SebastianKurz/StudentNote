import { Injectable } from '@angular/core';
import {HttpModule} from '@angular/http';

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

var globalStatus : string = null;


@Injectable()
export class GlobalSchool {
  public setSchool(school:School): number {
    localStorage.setItem('CurrentSchool', JSON.stringify(school));
    return 0;}
  public unsetSchool(): number {
    localStorage.removeItem('CurrentSchool');
    return 0;}
  public getSchool():School{
    var school : School = new School(null,null);
    school = JSON.parse(localStorage.getItem('CurrentSchool')) as School;
    return school;
  }
}
@Injectable()
export class GlobalClass {
  public setClass(klasse:Class): number {
      localStorage.setItem('CurrentClass', JSON.stringify(klasse));
    return 0;}
  public unsetClass(): number {
    localStorage.removeItem('CurrentClass');
    return 0;}
  public getClass():Class{
    var klasse : Class = new Class(null,null,null,null);
    klasse = JSON.parse(localStorage.getItem('CurrentClass')) as Class;
    return klasse;
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
export class GlobalLogin {
  public setLogin(teacher : Teacher){
      localStorage.setItem('CurrentTeacher', JSON.stringify(teacher));
    }
  public unsetLogin(): number {
    localStorage.removeItem('CurrentTeacher');
    return 0;}
  public getLogin(){
    var teacher : Teacher = new Teacher(null,null,null,null,null,null);
    teacher = JSON.parse(localStorage.getItem('CurrentTeacher')) as Teacher;
    return teacher;
  }
}
@Injectable()
export class Global {
  public gSchools:School[] = SCHOOLS;
  public gClasses:Class[] = CLASSES;
  public gStudents:Student[] = STUDENTS;
  public gNotes:Note[] = NOTES;
  public gTeachers:Teacher[] = TEACHERS;
  public basicUrl = 'https://studentnotegae-webengii.appspot.com';
}
