import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Class } from '../types/types';
import {Note} from '../types/types';
import {School} from '../types/types';
import {Student} from '../types/types';
import {Teacher} from '../types/types';

import {Global} from './local.service';

import * as func from '../lib/functions';

@Injectable()
export class getSchoolService {
  private global : Global;
  private http: Http;
  private url = 'get/getSchool';
  id:number;
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
this.id=0;
}
  public getSchools(): Promise<School[]> {
    return this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().data as School[])
             .catch(func.handleError);
           }

    //return func.sort(this.global.gSchools,'name','asc');}

  public getSchool(id:number): Promise<School> {// With School ID
    this.id=id;
  return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
    .toPromise()
    .then(response => response.json().data as School)
    .catch(func.handleError);
    }
}

@Injectable()
export class getClassService {private global : Global;private http: Http; private url = 'get/getClass';id:number;
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
this.id=0;
}/*
  public getClasses(): Promise<Class[]> {

    return this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().data as Class[])
             .catch(func.handleError);
    //return func.sort(this.global.gClasses,'level','asc');
  }*/
  public getClass(schoolid:number,id:number):Promise<Class> {// With Class ID
    this.id=id;
  return this.http.get(`${this.global.basicUrl}/${this.url}/${schoolid}/${id}`)
    .toPromise()
    .then(response => response.json().data as Class)
    .catch(func.handleError);
  }
  public getEntities(id:number):Promise<Class[]> {// With School ID
this.id=id;
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
      .toPromise()
      .then(response => response.json().data as Class[])
      .catch(func.handleError);
    }
}

@Injectable()
export class getStudentService {private global : Global;private http: Http; private url = 'get/getStudent';id:number;
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
this.id=0;
}/*
  public getStudents(): Promise<Student[]> {

    return this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().data as Student[])
             .catch(func.handleError);
    //return func.sort(this.global.gStudents,'level','asc');
  }*/
  public getStudent(classid:number, id:number):Promise<Student> {// With Student ID
    this.id=id;
  return this.http.get(`${this.global.basicUrl}/${this.url}/${classid}/${id}`)
    .toPromise()
    .then(response => response.json().data as Student)
    .catch(func.handleError);
  }
  public getEntities(id:number):Promise<Student[]> {// With Class ID
    this.id=id;
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
      .toPromise()
      .then(response => response.json().data as Student[])
      .catch(func.handleError);
    }
}

@Injectable()
export class getNoteService {private global : Global;private http: Http; private url = 'get/getNote';
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}/*
  public getNotes() : Promise<Note[]> {

    var a= this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().data as Note[])
             .catch(func.handleError);
  return func.sort(a,'timestamp','dsc');
}*/
  public getNote(studentid:number, id:number):Promise<Note> {// With Note ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${studentid}/${id}`)
           .toPromise()
           .then(response => response.json().data as Note[])
           .catch(func.handleError);
         }
  public getEntities(id:number): Promise<Note[]> {// With Student ID
    var a= this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
         .toPromise()
         .then(response => response.json().data as Note[])
         .catch(func.handleError);
         return func.sort(a,'timestamp','dsc');
       }
      }
@Injectable()
export class getTeacherService {private global : Global;private http: Http; private url = 'get/getTeacher';
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}/*
  public getTeachers(): Teacher[] {
    var a= this.http.get(`${this.global.basicUrl}/${this.url}`)
           .toPromise()
           .then(response => response.json().data as Teacher[])
           .catch(func.handleError);
return func.sort(a,'timestamp','dsc');
}*/
  public getTeacher(id:number):Promise<Teacher> {// With Teacher ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
         .toPromise()
         .then(response => response.json().data as Teacher)
         .catch(func.handleError);
       }
  public getEntities(id:number):Promise<Teacher[]> {//With School ID
    var a = this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
         .toPromise()
         .then(response => response.json().data as Teacher[])
         .catch(func.handleError);
    return func.sort(a,'timestamp','dsc');
       }
  public getTeacherByMail(mail:string):Promise<Teacher> {//With Mail Address
    return this.http.get(`${this.global.basicUrl}/login/login/${mail}`)
         .toPromise()
         .then(response => response.json().data as Teacher)
         .catch(func.handleError);
       }
}
